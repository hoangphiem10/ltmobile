import { AuthAPI } from "../apis/authAPI";
export interface IUser {
  _id: string;
  fullname: string;
  email: string;
  password: string;
}
export interface ILoginRequest {
  email: string;
  password: string;
}
export interface ILoginResponse {
  accessToken: string;
  user: IUser;
}
export interface Ijwt {
  id: string;
  iat: number;
  exp: number;
}
export const authService = {
  /**
   * Handle call api
   * @param {Object} data Object
   */
  signin(data: ILoginRequest) {
    AuthAPI.signin(data);
  },
};
