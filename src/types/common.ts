export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface IPagination {
  total: number;
  skip: number;
  limit: number
}

export interface INextParams {
  searchParams: Record<string, string>
}