export interface IResponseApiData<T> {
  code: string;
  data: T;
  message: string;
  success: boolean;
  errors?: string[];
}

export type IResponseApi<T> = IResponseApiData<T>;
