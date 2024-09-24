import {FC} from "react";
import {ICatalogProps} from "@/components/catalog/catalog.types";
import ProductComponent from "@/components/product/product.component";

const CatalogComponent: FC<ICatalogProps> = ({products}) => {
  return (
    <div className='grid grid-cols-5 gap-5'>
      {products.map((product) => (
        <ProductComponent product={product} key={product.id}/>
      ))}
    </div>
  )
}

export default CatalogComponent