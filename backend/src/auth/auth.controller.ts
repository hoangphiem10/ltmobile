import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { userLoginDto } from './dto/signin.dto';
import { Request, Response } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthenticationGuard } from './guard/authentication.guard';
import { SignInResponse } from './response/signin.response';
import { User } from 'src/users/schema/user.schema';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Register new account'})
  @ApiResponse({ status: 200, description: 'Register new account successfully !', type: User })
  async signup(@Body() userSignUp: CreateUserDto) {
    const { password } = userSignUp;
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return await this.authService.signup(userSignUp, hashedPassword);
  }

  @Post('signin')
  @ApiOperation({ summary: 'Sign in'})
  @ApiResponse({ status: 200, description: 'Login successfully !', type: SignInResponse })
  @ApiResponse({ status: 401, description: 'Password is incorrect !' })
  @ApiResponse({ status: 404, description: 'Email doesn not exist !' })
  async signin(@Body() userLogin: userLoginDto, @Res() res: Response) {
    return await this.authService.signin(userLogin, res);
  }

  @Post('refreshToken')
  async refreshToken(@Req() req: Request, @Res() res: Response) {
    return await this.authService.refreshToken(req, res);
  }

  @Post('signout')
  @UseGuards(AuthenticationGuard)
  async signout(@Res() res: Response) {
    return await this.authService.signout(res);
  }
}
