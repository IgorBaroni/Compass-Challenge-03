import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../../context/ProductsContext";
import { ShopItems } from "../ShopItems";
import { Category } from "../../../../types/Category";
import { SortType } from "../../../../types/SortType";

export function ShopMain() {
  const { products, setCategory, setSortType } = useContext(ProductsContext);
  const [productsToShow, setProductsToShow] = useState("16");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const handleFilterMenu = () =>
    isFilterMenuOpen ? setIsFilterMenuOpen(false) : setIsFilterMenuOpen(true);

  const handleCategoryChange = (e: Category) => {
    setCategory(e);
  };

  const handleSortChange = (e: SortType) => {
    setSortType(e);
  };

  useEffect(() => {
    setProductsToShow(products.length.toString());
  }, [products.length]);

  return (
    <div>
      <div className="bg-newwhite-600 py-5 px-20 flex flex-col md:flex-row gap-5 md:gap-0 font-poppins justify-between items-center">
        <div
          className={`${
            isFilterMenuOpen ? "absolute" : "hidden"
          } mt-9 -ml-5 md:mt-32 md:-ml-10`}
        >
          <div className="bg-newwhite-700 border border-black rounded p-2 md:p-4">
            <select
              name="sortBy"
              id="sortBy"
              className="p-2 rounded-sm w-32"
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="">All</option>
              <option value="Couches">Couches</option>
              <option value="Tables">Tables</option>
              <option value="Wardrobes">Wardrobes</option>
              <option value="Cabinets">Cabinets</option>
              <option value="Chairs">Chairs</option>
              <option value="Desks/Computer Tables">
                Desks/Computer Tables
              </option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 items-center flex-col md:flex-row">
          <ul className="flex gap-6 items-center">
            <li
              className="flex gap-3 cursor-pointer"
              onClick={handleFilterMenu}
            >
              <img src="./src/assets/icon/filter.svg" alt="filter-icon" />
              <p>Filter</p>
            </li>
            <li className="cursor-pointer">
              <img src="./src/assets/icon/filter-2.svg" alt="filter-icon-2" />
            </li>
            <li className="cursor-pointer">
              <img src="./src/assets/icon/filter-3.svg" alt="filter-icon-3" />
            </li>
          </ul>
          <div className="border-t-2 md:border-l-2 md:border-t-0 text-center md:text-start border-newgray-100 py-3 md:py-1.5 px-5">
            {productsToShow === "" || productsToShow === "0" ? (
              <p className="text-sm">Showing 0 products!</p>
            ) : (
              <p className="text-sm">
                Showing 1–
                {productsToShow} of {products.length} results
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex gap-3 items-center">
            <label htmlFor="show">Show</label>
            <input
              type="number"
              id="show"
              value={productsToShow}
              min={1}
              max={products.length}
              onChange={(e) => setProductsToShow(e.target.value)}
              className="w-14 p-2 text-center rounded-sm"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="sortBy">Sort By</label>
            <select
              name="sortBy"
              id="sortBy"
              className="p-2 rounded-sm w-40"
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="Default">Default</option>
              <option value="AToZ">A-Z</option>
              <option value="ZToA">Z-A</option>
              <option value="moreExpensive">More expensive</option>
              <option value="cheaper">Cheaper</option>
              <option value="new">New</option>
              <option value="onSale">On sale</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <ShopItems numProducts={parseInt(productsToShow)} />
      </div>
    </div>
  );
}
