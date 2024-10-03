import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Cart } from ".";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/redux/store";
import {
  createMockStore,
  product,
  product2,
  product3,
} from "../../test/mockedUtils";
import { act } from "react";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Cart />
      </Provider>
    </MemoryRouter>
  );
};

// Mock para window.scrollTo
beforeAll(() => {
  window.scrollTo = jest.fn();
});

describe("<Cart />", () => {
  it("should render", () => {
    renderComponent();

    const texts = screen.getAllByText("Cart");

    expect(texts).toHaveLength(2);
  });

  it("should display text when user doesn't have any products", () => {
    renderComponent();

    const text = screen.getByText(
      /You do not have any products in your cart yet./i
    );

    expect(text).toBeInTheDocument();
  });

  it("should display products", () => {
    const initialState = {
      cart: {
        cartItems: [product, product2],
        cartTotalQuantity: 2,
        cartTotalAmount: 100,
      },
    };
    const store = createMockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </MemoryRouter>
    );

    const trashCans = screen.getAllByTestId(/trashCan/i);

    expect(trashCans).toHaveLength(2);
  });
  it("should increase an item quantity when clicking in '+' icon", async () => {
    const initialState = {
      cart: {
        cartItems: [product3],
        cartTotalQuantity: 1,
        cartTotalAmount: 100,
      },
    };
    const store = createMockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </MemoryRouter>
    );

    const increaseButton = screen.getByTestId("increaseIcon");
    const cartQuantity = screen.getByTestId("cartQuantity");

    act(() => {
      fireEvent.click(increaseButton);
    });

    await waitFor(() => {
      expect(cartQuantity).toHaveTextContent("2");
    });
  });
  it("should decrease an item quantity when clicking in '-' icon", async () => {
    const initialState = {
      cart: {
        cartItems: [product3],
        cartTotalQuantity: 1,
        cartTotalAmount: 100,
      },
    };
    const store = createMockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </MemoryRouter>
    );

    const increaseButton = screen.getByTestId("increaseIcon");
    const decreaseButton = screen.getByTestId("decreaseIcon");
    const cartQuantity = screen.getByTestId("cartQuantity");

    act(() => {
      fireEvent.click(increaseButton);
    });

    act(() => {
      fireEvent.click(decreaseButton);
    });

    await waitFor(() => {
      expect(cartQuantity).toHaveTextContent("1");
    });
  });
});
