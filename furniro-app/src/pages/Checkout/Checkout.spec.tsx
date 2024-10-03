import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Checkout } from ".";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/redux/store";
import { createMockStore, product } from "../../test/mockedUtils";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Checkout />
      </Provider>
    </MemoryRouter>
  );
};

// Mock para window.scrollTo
beforeAll(() => {
  window.scrollTo = jest.fn();
});

describe("<Checkout />", () => {
  it("should render", () => {
    renderComponent();

    const texts = screen.getAllByText("Checkout");

    expect(texts).toHaveLength(2);
  });

  it("should display error message when trying to place order without data", async () => {
    renderComponent();

    const button = screen.getByRole("button", { name: "Place order" });

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      const errorMessage = screen.getByText(/Provide your first name./i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("should display cart total", () => {
    const initialState = {
      cart: {
        cartItems: [product],
        cartTotalQuantity: 2,
        cartTotalAmount: 100,
      },
    };
    const store = createMockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Checkout />
        </Provider>
      </MemoryRouter>
    );

    const total = screen.getByTestId("cartTotal");

    expect(total).toHaveTextContent("R$ 100");
  });

  it("should display product subtotal", () => {
    const initialState = {
      cart: {
        cartItems: [product],
        cartTotalQuantity: 2,
        cartTotalAmount: 0,
      },
    };
    const store = createMockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Checkout />
        </Provider>
      </MemoryRouter>
    );

    const total = screen.getByTestId("productTotal");

    expect(total).toHaveTextContent("R$ 6400");
  });
  it("should let user type only numbers in zipCodeInput", async () => {
    const initialState = {
      cart: {
        cartItems: [product],
        cartTotalQuantity: 2,
        cartTotalAmount: 0,
      },
    };
    const store = createMockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Checkout />
        </Provider>
      </MemoryRouter>
    );

    const zipCodeInput = screen.getByLabelText("zipCode");

    act(() => {
      fireEvent.change(zipCodeInput, { target: { value: "12345678" } });
    });

    await waitFor(() => {
      expect(zipCodeInput).toHaveValue("12345678");
    });
  });
});
