import { apiToken } from "../../../api/ApiWithToken";

export async function getInventoryBookData(currentPage: number, locationId: string){

  let response;
  if (locationId) {
    response = await apiToken.get<any>(`/items?page=${currentPage}&limit=10&location_id=${locationId}`);
  } else {
    response = await apiToken.get<any>(`/items?page=${currentPage}&limit=10`);
  }

  if (response?.status !== 200) {
    throw new Error(response.data.message);
  }
  return response?.data;
}

export async function addInventoryBook(data: any){
  const response = await apiToken.post<any>(`/items`, data);
  if (response?.status !== 201) {
    throw new Error(response.data.message);
  }
  return response.data.data;
}

export async function deleteInventoryBook(id: string){
  const response = await apiToken.delete<any>(`/items/${id}`);
  if (response?.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data.data;
}

export async function geInventoryBookById(id: any){
  const response = await apiToken.get<any>(`/items/${id?.queryKey?.[1]}`);
  if (response?.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data;
}

export async function patchInventoryBook(data: any){
  const response = await apiToken.patch<any>(
    `/items/${data?.id}`,
    {
      ...data?.data
    }
  );
  if (response?.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data;
}
