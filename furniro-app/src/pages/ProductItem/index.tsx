import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext, useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { ProductHeader } from "./components/ProductHeader";
import { ProductBody } from "./components/ProductBody";
import { RelatedProducts } from "./components/RelatedProducts";

type ProductItemProps = {
  initialProduct?: Product;
};

export function ProductItem({ initialProduct }: ProductItemProps) {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(
    null! || initialProduct
  );
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!initialProduct) {
      setProduct(products.find((product) => product.id.toString() === id)!);
    }
  }, [id, initialProduct, products]);

  if (!product)
    return (
      <div className="text-2xl font-semibold p-36 text-center">
        <h1>Product not found!</h1>
      </div>
    );

  return (
    <div>
      {product && (
        <div className="font-poppins flex flex-col gap-5">
          <ProductHeader title={product.title} />
          <ProductBody product={product} />
          <RelatedProducts category={product.category} />
        </div>
      )}
    </div>
  );
}
