import { User } from "src/users/schema/user.schema";
import { ApiProperty } from '@nestjs/swagger';

export class SignInResponse {
    @ApiProperty({ example: 'access-token'})
    accessToken: string;

    @ApiProperty()
    user: User;
}