import { apiToken } from "../../../api/ApiWithToken";

export async function getLocationData(currentPage: number){
  const response = await apiToken.get<any>(`/items-locations?page=${currentPage}&limit=10`);
  if (response?.status !== 200) {
    throw new Error(response.data.message);
  }
  return response?.data;
}

export async function addLocation(data: any){
  const response = await apiToken.post<any>(`/items-locations`, data);
  console.log(response)
  if (response?.status !== 201) {
    throw new Error(response.data.message);
  }
  return response.data.data;
}

export async function deleteLocation(id: string){
  const response = await apiToken.delete<any>(`/items-locations/${id}`);
  if (response?.status !== 201) {
    throw new Error(response.data.message);
  }
  return response.data.data;
}

export async function getLocationById(id: string){
  const response = await apiToken.get<any>(`/items-locations/${id?.queryKey?.[1]}`);
  if (response?.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data;
}

export async function patchLocation(data: any){
  const response = await apiToken.patch<any>(
    `/items-locations/${data?.id}`,
    {
      ...data?.data
    }
  );
  if (response?.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data;
}

