import { Api } from ".";
import {
  ISignInRequest,
  ISignInResponse,
  ISignUpRequest,
  ISignUpResponse,
} from "../services/auth.service";
const AUTH_API = {
  signin: "auth/signin",
  signup: "auth/signup",
  refreshToken: "auth/refreshToken",
};

export const AuthAPI = {
  /**
   * Call api login
   * @param {Object} data ISignInRequest
   */
  signin(data: ISignInRequest) {
    return Api.post<ISignInRequest, ISignInResponse>(AUTH_API.signin, data);
  },

  /**
   * Call api login
   * @param {Object} data ISignInRequest
   */
  signup(data: ISignUpRequest) {
    return Api.post<ISignUpRequest, ISignUpResponse>(AUTH_API.signup, data);
  },
};
