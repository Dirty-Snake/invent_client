import { IResponseApi } from "../../../api/types/IRequestApi";
import { api } from "../../../api/ApiWithoutToken";

export const PreAuth = async (data: {username: string, password: string}): Promise<IResponseApi<any>> => {
  return await api.post("/auth/login", {username: data?.username, password: data.password});
};

