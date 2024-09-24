import {api} from "@/api";
import {IProductPagination} from "@/types/product";

// export const fetchProducts = async ({search}: {search: string}) => {
//   return api<IProductPagination>(`/products?${search}`);
// }

export const searchProducts = async ({search}: {search?: string}) => {
  return api<IProductPagination>(`/products/search?q=${search}`);
}