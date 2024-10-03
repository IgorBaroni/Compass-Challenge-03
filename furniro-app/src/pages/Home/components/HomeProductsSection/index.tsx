import { Link } from "react-router-dom";
import { ProductCard } from "../../../../components/ProductCard";
import { useContext, useEffect, useState } from "react";
import { Product } from "../../../../types/Product";
import { ProductsContext } from "../../../../context/ProductsContext";

export function HomeProductsSection() {
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const { products } = useContext(ProductsContext);

  const setProducts = () => {
    const randomData = products.sort(() => 0.5 - Math.random());
    const newData = randomData.slice(0, 8);
    setProductsToShow(newData);
  };

  useEffect(() => {
    setProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  if (productsToShow.length === 0) {
    return (
      <div className="text-center py-40 md:p-40 font-poppins font-medium text-2xl">
        Products not found
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center p-10 font-poppins ">
      <div>
        <p className="text-center text-newgray-600 text-3xl font-bold">
          Our Products
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <ul className="flex flex-wrap justify-center gap-5 px-4 md:px-40 flex-col md:flex-row">
          {productsToShow.map((product: Product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        <Link
          to="/shop"
          className="text-newgolden text-lg font-semibold py-3 px-20 border border-newgolden hover:bg-newgolden hover:text-white transition-all duration-150"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}
