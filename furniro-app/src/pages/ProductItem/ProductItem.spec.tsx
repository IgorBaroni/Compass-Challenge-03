import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductItem } from ".";
import { Provider } from "react-redux";
import store from "../../utils/redux/store";
import { createMockStore, product } from "../../test/mockedUtils";
import { act } from "react";
import { HeaderActions } from "../../components/Header/HeaderActions";

// Mock para window.scrollTo
beforeAll(() => {
  window.scrollTo = jest.fn();
});

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <ProductItem />
      </Provider>
    </MemoryRouter>
  );
};

// Silencia os erros de console (console.error) antes de todos os testes
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

// Restaura todos os mocks depois de todos os testes
afterAll(() => {
  jest.restoreAllMocks();
});

describe("<ProductItem />", () => {
  it("should render an error message when product does not exist", () => {
    renderComponent();

    const text = screen.getByText(/Product not found!/i);

    expect(text).toBeInTheDocument();
  });
  it("should render product when it exists", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductItem initialProduct={product} />
        </Provider>
      </MemoryRouter>
    );

    const text = screen.getAllByText(/3 Seater Double Sofa Bed Genoa Blue/i);

    expect(text).toHaveLength(2);
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
          <ProductItem initialProduct={product} />
        </Provider>
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "Add To Cart" });

    act(() => {
      fireEvent.click(button);
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
  it("should increase an item quantity when clicking in '+' icon", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductItem initialProduct={product} />
        </Provider>
      </MemoryRouter>
    );

    const increaseButton = screen.getByTestId("increaseIcon");
    const productQuantity = screen.getByTestId("productQuant");

    act(() => {
      fireEvent.click(increaseButton);
    });

    await waitFor(() => {
      expect(productQuantity).toHaveTextContent("2");
    });
  });
  it("should decrease an item quantity when clicking in '-' icon", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductItem initialProduct={product} />
        </Provider>
      </MemoryRouter>
    );

    const increaseButton = screen.getByTestId("increaseIcon");
    const decreaseButton = screen.getByTestId("decreaseIcon");
    const productQuantity = screen.getByTestId("productQuant");

    act(() => {
      fireEvent.click(increaseButton);
    });

    act(() => {
      fireEvent.click(decreaseButton);
    });

    await waitFor(() => {
      expect(productQuantity).toHaveTextContent("1");
    });
  });
});
