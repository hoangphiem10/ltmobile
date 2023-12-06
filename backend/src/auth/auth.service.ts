import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { CreateUserDto } from './dto/signup.dto';
import { userLoginDto } from './dto/signin.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  /**
   * Function to generate accesstoken
   * @param {Object} payload Object
   */
  async generateAccessToken(payload: { id: mongoose.Types.ObjectId }) {
    return await this.jwtService.signAsync(payload, {
      secret: process.env.ACCESS_SECRET_KEY,
      expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN,
    });
  }

  /**
   * Function to generate refreshtoken
   * @param {Object} payload Object
   */
  async generateRefreshToken(payload: { id: mongoose.Types.ObjectId }) {
    return await this.jwtService.signAsync(payload, {
      secret: process.env.REFRESH_SECRET_KEY,
      expiresIn: process.env.REFRESH_TOKEN_EXPIRESIN,
    });
  }

  /**
   * Register account
   * @param {Object} userSignUp CreateUserDto
   * @param {string} password String
   */
  async signup(userSignUp: CreateUserDto, password: string) {
    const { email } = userSignUp;
    const user = await this.userService.findUserByEmail(email);
    if (user) {
      throw new HttpException('This Email exists !', HttpStatus.CONFLICT);
    }
    return await this.userService.createUser(userSignUp, password);
  }

  /**
   * Login function
   * @param {Object} userLogin userLoginDto
   * @param {Response} res Response
   */
  async signin(userLogin: userLoginDto, res: Response) {
    const { email, password } = userLogin;
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new HttpException(
        'Email doesn not exist !',
        HttpStatus.NOT_FOUND,
      );
    }

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      throw new HttpException(
        'Password is incorrect !',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = { id: user._id };
    const accessToken = await this.generateAccessToken(payload);
    const refreshToken = await this.generateRefreshToken(payload);

    //STORE REFRESH TOKEN IN COOKIE
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      //when deploy,set secure true
      secure: false,
      path: '/',
      sameSite: 'strict',
    });
    const _user = { ...user.toObject() };
    delete _user.password;
    return res.status(HttpStatus.OK).send({ accessToken, user: _user });
  }

  /**
   * Function handle refreshToken and return accessToken for client
   * @param {Request} req Request
   * @param {Response} res Response
   */
  async refreshToken(req: Request, res: Response) {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken)
        throw new HttpException(
          'Refresh token is not valid',
          HttpStatus.UNAUTHORIZED,
        );
      const decode = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.REFRESH_SECRET_KEY,
      });
      if (!decode) {
        throw new HttpException(
          'You are not authenticated!',
          HttpStatus.UNAUTHORIZED,
        );
      }
      const payload = { id: decode?._id };
      const newAccessToken = await this.generateAccessToken(payload);
      const newRefreshToken = await this.generateRefreshToken(payload);

      //STORE REFRESH TOKEN IN COOKIE
      res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        //when deploy,set secure true
        secure: false,
        path: '/',
        sameSite: 'strict',
      });

      return res.status(HttpStatus.OK).send({ accessToken: newAccessToken });
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Logout function
   * @param {Response} res Response
   */
  async signout(res: Response) {
    //Clear cookies when user logs out
    res.clearCookie('refreshToken');
    return res.status(HttpStatus.OK).send('Logged out successfully!');
  }
}
