import { createContext, useEffect, useState } from "react";
import { Product } from "../types/Product";
import axiosApi from "../utils/axiosApi";

type ContextProps = {
  children: React.ReactNode;
};

interface ProductContextType {
  products: Product[];
  setCategory: (category: string) => void;
  setSortType: (sortType: string) => void;
}

export const ProductsContext = createContext<ProductContextType>({
  products: [],
  setCategory: () => "",
  setSortType: () => "",
});

export const ProductsProvider = ({ children }: ContextProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [sortType, setSortType] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let api = `/products`;

      if (category) {
        api = `/products?category=${category}`;
      }

      try {
        const response = await axiosApi.get(api);
        const data = response.data;

        if (sortType == "AToZ") {
          const AToZProducts = data.sort((a: Product, b: Product) =>
            a.title.localeCompare(b.title)
          );
          setProducts(AToZProducts);
        } else if (sortType == "ZToA") {
          const ZToAProducts = data.sort((a: Product, b: Product) =>
            b.title.localeCompare(a.title)
          );
          setProducts(ZToAProducts);
        } else if (sortType == "moreExpensive") {
          const moreExpensiveProducts = data.sort(
            (a: Product, b: Product) => b.normalPrice - a.normalPrice
          );
          setProducts(moreExpensiveProducts);
        } else if (sortType == "cheaper") {
          const cheaperProducts = data.sort(
            (a: Product, b: Product) => a.normalPrice - b.normalPrice
          );
          setProducts(cheaperProducts);
        } else if (sortType == "new") {
          const newProducts = data.filter(
            (product: Product) => product.new === true
          );
          setProducts(newProducts);
        } else if (sortType == "onSale") {
          const onSaleProducts = data.filter(
            (product: Product) => product.discountPercentage > 0
          );
          setProducts(onSaleProducts);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error("Erro ao obter os produtos: ", error);
      }
    };

    fetchData();
  }, [category, sortType]);

  return (
    <ProductsContext.Provider value={{ products, setCategory, setSortType }}>
      {children}
    </ProductsContext.Provider>
  );
};
