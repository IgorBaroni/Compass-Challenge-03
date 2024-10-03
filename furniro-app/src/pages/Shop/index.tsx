import { useEffect } from "react";
import { PageBottomSection } from "../../components/PageBottomSection";
import { PageTopSection } from "../../components/PageTopSection";
import { ShopMain } from "./components/ShopMain";
import { ProductsProvider } from "../../context/ProductsContext";

export function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageTopSection pageTitle="Shop" />
      <div>
        <ProductsProvider>
          <ShopMain />
        </ProductsProvider>
      </div>
      <PageBottomSection />
    </div>
  );
}
