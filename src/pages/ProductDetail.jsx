import { useParams } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import ProductDetails from "@/features/details/components/ProductDetails";
import DetailsSkeleton from "@/features/skeletons/details_skeleton/components/DetailsSkeleton";

const ProductDetail = () => {
  const { id } = useParams();

  const { products, isLoading } = useProducts(
    `https://dummyjson.com/products/${id}`,
  );

  return (
    <main>
      {isLoading ? <DetailsSkeleton /> : <ProductDetails product={products} />}
    </main>
  );
};

export default ProductDetail;
