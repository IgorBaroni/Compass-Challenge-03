import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HomeProductsSection } from ".";
import { Shop } from "../../../Shop";
import { ProductsContext } from "../../../../context/ProductsContext";
import { product, product2 } from "../../../../test/mockedUtils";
import store from "../../../../utils/redux/store";
import { Provider } from "react-redux";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <HomeProductsSection />
    </MemoryRouter>
  );
};

// Mock para window.scrollTo
beforeAll(() => {
  window.scrollTo = jest.fn();
});

describe("<HomeProductsSection />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("Products not found");

    expect(text).toBeInTheDocument();
  });
  it("should go to Shop page when clicking 'Show More' button", async () => {
    const mockProducts = [product, product2];
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
            <Routes>
              <Route path="/" element={<HomeProductsSection />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </ProductsContext.Provider>
        </Provider>
      </MemoryRouter>
    );

    const button = screen.getByText(/Show More/i);

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      const texts = screen.getAllByText("Shop");

      expect(texts).toHaveLength(2);
    });
  });
});
