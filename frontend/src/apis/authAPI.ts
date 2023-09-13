import { Api } from ".";
import { ILoginRequest, ILoginResponse } from "../services/auth.service";
const AUTH_API = {
  signin: "auth/signin",
  signup: "auth/signup",
};

export const AuthAPI = {
  /**
   * Call api login
   * @param {Object} data Object
   */
  signin(data: ILoginRequest) {
    Api.post<ILoginRequest, ILoginResponse>(AUTH_API.signin, data);
  },
};
