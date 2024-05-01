import { AxiosResponse } from "axios";
import { message } from "antd";

export const ApiErrorHandler = (response: AxiosResponse) => {
  if (response.status === 403) {

    return response;
  }
  return response;
};
