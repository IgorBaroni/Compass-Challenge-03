import { useContext, useState } from "react";
import { ProductsContext } from "../../../../context/ProductsContext";
import { Product } from "../../../../types/Product";
import { ProductCard } from "../../../../components/ProductCard";

export type RelatedProductsProps = {
  category: string;
};

export function RelatedProducts({ category }: RelatedProductsProps) {
  const { products, setCategory } = useContext(ProductsContext);
  setCategory(category);
  const [similarsToShow, setSimilarsToShow] = useState<number>(4);
  const [buttonVisible, setButtonVisible] = useState(true);

  const productsToShow = products.slice(0, similarsToShow);

  const handleShowMoreItems = () => {
    setSimilarsToShow(8);
    setButtonVisible(false);
  };

  return (
    <div className="pt-5 pb-10 mt-5 border-t border-newgray-50 w-full">
      <div className="w-full flex flex-col gap-10 justify-center items-center mt-10">
        <p className="text-2xl font-medium text-center">Related Products</p>
        <ul className="flex flex-wrap justify-center gap-5 px-4 md:px-40 flex-col md:flex-row">
          {productsToShow.map((product: Product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        {buttonVisible && (
          <button
            className="text-newgolden text-lg font-semibold py-3 px-20 border border-newgolden hover:bg-newgolden hover:text-white transition-all duration-150"
            onClick={() => handleShowMoreItems()}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}
