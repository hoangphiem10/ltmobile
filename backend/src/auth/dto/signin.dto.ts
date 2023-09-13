import {
  IsEmail,
  IsNotEmpty,
  // Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class userLoginDto {
  @IsEmail()
  @MinLength(11)
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(16)
  //Minimum eight characters, at least one letter, one number and one special character
  // @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  password: string;
}
