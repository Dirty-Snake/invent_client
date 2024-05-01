import { apiToken } from "../../../api/ApiWithToken";
import { IResponseApiData } from "../../../api/types/IRequestApi";

export async function getInventoryBookData(){
  const response = await apiToken.get<any>(`/items`);
  if (response?.data?.success === false) {
    throw new Error(response.data.message);
  }
  return response.data.data;
}
