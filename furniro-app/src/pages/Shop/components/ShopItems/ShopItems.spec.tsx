import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../../utils/redux/store";
import { ProductsContext } from "../../../../context/ProductsContext";
import { product, product2, product3 } from "../../../../test/mockedUtils";
import { ShopItems } from ".";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <ShopItems numProducts={10} />
      </Provider>
    </MemoryRouter>
  );
};

describe("<ShopItems />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("Products not found");

    expect(text).toBeInTheDocument();
  });
  it("should display products", () => {
    const mockProducts = [product, product2, product3];
    const mockSetCategory = jest.fn();
    const mockSetSortType = jest.fn();
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductsContext.Provider
            value={{
              products: mockProducts,
              setCategory: mockSetCategory,
              setSortType: mockSetSortType,
            }}
          >
            <ShopItems numProducts={3} />
          </ProductsContext.Provider>
        </Provider>
      </MemoryRouter>
    );

    const shareIcons = screen.getAllByAltText("share-icon");

    expect(shareIcons).toHaveLength(3);
  });
  it("should display products based on numProducts prop", () => {
    const mockProducts = [product, product2, product3];
    const mockSetCategory = jest.fn();
    const mockSetSortType = jest.fn();
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductsContext.Provider
            value={{
              products: mockProducts,
              setCategory: mockSetCategory,
              setSortType: mockSetSortType,
            }}
          >
            <ShopItems numProducts={2} />
          </ProductsContext.Provider>
        </Provider>
      </MemoryRouter>
    );

    const shareIcons = screen.getAllByAltText("share-icon");

    expect(shareIcons).toHaveLength(2);
  });
  it("should not display products when numProducts prop is 0", () => {
    const mockProducts = [product, product2, product3];
    const mockSetCategory = jest.fn();
    const mockSetSortType = jest.fn();
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductsContext.Provider
            value={{
              products: mockProducts,
              setCategory: mockSetCategory,
              setSortType: mockSetSortType,
            }}
          >
            <ShopItems numProducts={0} />
          </ProductsContext.Provider>
        </Provider>
      </MemoryRouter>
    );

    const shareIcons = screen.queryAllByAltText("share-icon");

    expect(shareIcons).not.toHaveLength(3);
  });
});
