import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import jwt_decode from "jwt-decode";
import { Ijwt } from "../services/auth.service";
import { Helper } from "../helper/helper";
import { Constants } from "../constants/constants";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "*/*",
  withCredentials: true,
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
};
const Config = {
  baseURL: Constants.API.BASE_URL,
  method: {
    get: "GET",
    post: "POST",
    put: "PUT",
    delete: "DELETE",
  },
};
const injectToken = async (config: any) => {
  try {
    let date = new Date();
    const token = await Helper.Secure.getString("acessToken");
    if (!token) return config;
    const decoded: Ijwt = jwt_decode(token);
    const t = date.getTime() / 1000;
    if (decoded.exp < date.getTime() / 1000) {
      const res = await axios.post("auth/refreshToken", {
        withCredentials: true,
      });
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${res.data.accessToken}`,
      };
    }
    return config;
  } catch (error: any) {
    throw new Error(error);
  }
};

class Http {
  private instance: AxiosInstance | null = null;
  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }
  initHttp() {
    const http = axios.create({
      baseURL: Config.baseURL,
      headers,
    });
    http.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error)
    );
    http.interceptors.response.use(
      (res) => {
        this.handleAfterFetchSuccess(res);
        return res;
      },
      (err) => {
        this.handleAfterFetchError(err);
        return Promise.reject(err);
      }
    );
    this.instance = http;
    return http;
  }
  private handleAfterFetchSuccess(res: AxiosResponse) {
    if (__DEV__) {
      console.log(
        `%c #AxiosSuccess: [url: ${res.config.baseURL}${res.config.url}] [method: ${res.config.method} - status: ${res.status}]`,
        Constants.STYLES.CONSOLE_LOG_SUCCESS
      );
      console.log("responseData: ", res.data);
    }
  }
  private handleAfterFetchError(err: any) {
    if (__DEV__) {
      console.log(
        `%c #AxioError: [message: ${err.response?.data.message}] [method: ${err.request._method} - status: ${err.request.status}] [url: ${err.request.responseURL}] `,
        Constants.STYLES.CONSOLE_LOG_ERROR
      );
      console.log("responseError: ", err);
    }
  }
  request<T, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T, F = any, R = AxiosResponse<F>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  patch<T = any, F = any, R = AxiosResponse<F>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.patch<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }
}

export const Api = new Http();
