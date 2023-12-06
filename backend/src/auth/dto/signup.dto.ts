import {
  IsEmail,
  IsNotEmpty,
  IsString,
  // Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Nguyen Van A'})
  @IsString()
  fullname: string;

  @ApiProperty({ example: 'a.nguyen@email.com'})
  @IsEmail()
  @MinLength(11)
  email: string;

  @ApiProperty({ example: 'nguyenvana@123'})
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(16)
  //Minimum eight characters, at least one letter, one number and one special character
  // @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  password: string;
}
