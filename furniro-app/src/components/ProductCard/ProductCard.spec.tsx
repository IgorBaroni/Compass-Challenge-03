import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { ProductCard } from ".";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/redux/store";
import { addToCart } from "../../utils/redux/cartSlice";
import { HeaderActions } from "../Header/HeaderActions";
import { createMockStore, product } from "../../test/mockedUtils";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <ProductCard product={product} />
      </Provider>
    </MemoryRouter>
  );
};

// Mock para window.scrollTo
beforeAll(() => {
  window.scrollTo = jest.fn();
});

describe("<ProductCard />", () => {
  it("should render", () => {
    renderComponent();

    const productTitle = screen.getByText(
      /3 Seater Double Sofa Bed Genoa Blue/i
    );

    expect(productTitle).toBeInTheDocument();
  });
  it("should not render 'new' rounded div", () => {
    renderComponent();

    const newDiv = screen.getByText(/New/i);

    expect(newDiv).toBeInTheDocument();
  });
  it("should add item when clicking in 'Add to cart' button", async () => {
    const initialState = {
      cart: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
      },
    };
    const store = createMockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductCard product={product} />
        </Provider>
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "Add to cart" });

    act(() => {
      fireEvent.click(button);
      store.dispatch(addToCart(product));
    });

    render(
      <MemoryRouter>
        <Provider store={store}>
          <HeaderActions />
        </Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const cartQuantityDiv = screen.queryByTestId("cartQuantity");
      expect(cartQuantityDiv).toHaveTextContent("1");
    });
  });
});
