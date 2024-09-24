import {IPagination} from "@/types/common";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  images: string[]
  thumbnail: string;
}

export interface IProductPagination extends IPagination {
  products: IProduct[]
}