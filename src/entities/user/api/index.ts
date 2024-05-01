import { IResponseApi } from "../../../api/types/IRequestApi";
import { api } from "../../../api/ApiWithoutToken";

export const PreAuth = async (data: {login: string, password: string}): Promise<IResponseApi<any>> => {
  return await api.post("/auth/login", {login: data?.login, password: data.password});
};

