import axios, { AxiosResponse } from "axios";
import { ApiErrorHandler } from "../middleware/api-error-handler";
import { HttpErrorHandler } from "../middleware/http-error-handler";
import { message } from "antd";

const apiToken = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
    Accept: 'application/json',
    Cache: "no-cache",
    withCredentials: false,
  },
  timeout: 10000,
  withCredentials: true,
  timeoutErrorMessage: "Превышено время ожидания ответа от сервера",
  validateStatus: function (status) {
    return (
      (status >= 200 && status < 300) ||
      status === 422 ||
      status === 401 ||
      status === 400 ||
      status === 500
    );
  },
});

apiToken.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    try {
      return Promise.resolve(ApiErrorHandler(response));
    } catch (e: any) {
      message.error(e.message);
      return Promise.reject(e);
    }
  },
  (error) => {
    HttpErrorHandler(error);
    return Promise.reject(error);
  }
);

export { apiToken };
