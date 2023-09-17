import { AuthAPI } from "../apis/authAPI";
import * as yup from "yup";

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export const signUpValidationSchema = yup.object({
  fullname: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("confirm password is required"),
});

export interface IUser {
  _id: string;
  fullname: string;
  email: string;
}

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ISignUpRequest {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ISignUpResponse {
  _id: string;
  fullname: string;
  email: string;
  password: string;
}

export interface ISignInResponse {
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
   * Handle to Sign In
   * @param {Object} data ISignInRequest
   */
  signin(data: ISignInRequest) {
    return AuthAPI.signin(data);
  },

  /**
   * Handle to Sign Up
   * @param {Object} data ISignUpRequest
   */
  signup(data: ISignUpRequest) {
    return AuthAPI.signup(data);
  },
};
