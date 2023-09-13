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
import { AuthenticationGuard } from './guard/authentication.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() user: CreateUserDto) {
    const { password } = user;
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return await this.authService.signup(user, hashedPassword);
  }

  @Post('signin')
  @HttpCode(200)
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
