import { useEffect } from "react";
import { HomeCategoriesSection } from "./components/HomeCategoriesSection";
import { HomeDiscoverSection } from "./components/HomeDiscoverSection";
import { HomeImagesSection } from "./components/HomeImagesSection";
import { HomeProductsSection } from "./components/HomeProductsSection";
import { HomeSliderSection } from "./components/HomeSliderSection";
import { ProductsProvider } from "../../context/ProductsContext";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HomeDiscoverSection />
      <HomeCategoriesSection />
      <ProductsProvider>
        <HomeProductsSection />
      </ProductsProvider>
      <HomeSliderSection />
      <HomeImagesSection />
    </div>
  );
}
