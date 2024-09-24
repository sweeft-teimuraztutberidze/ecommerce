import Image from "next/image";
import {FC} from "react";
import {IProductProps} from "@/components/product/product.types";

export const ProductComponent: FC<IProductProps> = ({product}) => {
  return (
    <div className='border border-solid border-gray-400 text-center'>
      <div className='relative'>
        <Image src={product.thumbnail} alt={product.title} width={100} height={100}/>
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  )
}

export default ProductComponent