import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { RelatedProducts } from ".";
import { Provider } from "react-redux";
import store from "../../../../utils/redux/store";
import { product, product2, product3 } from "../../../../test/mockedUtils";
import { ProductsContext } from "../../../../context/ProductsContext";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <RelatedProducts category="Tables" />
    </MemoryRouter>
  );
};

describe("<RelatedProducts />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText(/Related Products/i);

    expect(text).toBeInTheDocument();
  });

  it("should display related products", () => {
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
            <RelatedProducts category="Couches" />
          </ProductsContext.Provider>
        </Provider>
      </MemoryRouter>
    );

    const productsText = screen.getAllByText(/3 Seater Double/);

    expect(productsText).toHaveLength(3);
  });
});
