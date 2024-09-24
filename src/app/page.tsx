import CatalogComponent from "@/components/catalog/catalog.component";
import {searchProducts} from "@/services/product.service";
import {notFound} from "next/navigation";
import {NextPage} from "next";
import {INextParams} from "@/types/common";

const Home: NextPage<INextParams> = async ({searchParams}) => {
  const productRes = await searchProducts(searchParams)
  if(!productRes.success) {
    notFound()
  }
  return (
      <CatalogComponent products={productRes.data?.products || []} />
  );
}

export default Home