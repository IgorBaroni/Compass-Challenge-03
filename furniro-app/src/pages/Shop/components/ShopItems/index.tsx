import { useContext } from "react";
import { ProductsContext } from "../../../../context/ProductsContext";
import { ProductCard } from "../../../../components/ProductCard";
import { Product } from "../../../../types/Product";

type ShopItemsProps = {
  numProducts: number;
};

export function ShopItems({ numProducts }: ShopItemsProps) {
  const { products } = useContext(ProductsContext);

  const productsToShow = products.slice(0, numProducts);

  if (products.length === 0) {
    return (
      <div className="text-center py-40 md:p-40 font-poppins font-medium text-2xl">
        Products not found
      </div>
    );
  }
  if (productsToShow.length === 0) {
    return (
      <div className="text-center p-40 font-poppins font-medium text-2xl">
        Showing 0 products!
      </div>
    );
  }

  return (
    <div className="py-10 flex flex-col items-center gap-10">
      <ul className="flex flex-wrap justify-center gap-5 px-4 md:px-40 flex-col md:flex-row">
        {productsToShow.map((product: Product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <div>{/* <ShopButtons /> */}</div>
    </div>
  );
}
