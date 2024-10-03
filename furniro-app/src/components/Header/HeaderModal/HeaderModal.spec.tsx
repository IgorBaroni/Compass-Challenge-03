import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { HeaderModal } from ".";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../utils/redux/store";
import { createMockStore, product, product2 } from "../../../test/mockedUtils";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <HeaderModal setIsModalOpen={jest.fn()} />
      </Provider>
    </MemoryRouter>
  );
};

describe("<HeaderModal />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText(/Shopping Cart/i);

    expect(text).toBeInTheDocument();
  });
  it("should display products in cart", () => {
    const initialState = {
      cart: {
        cartItems: [product, product2],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
      },
    };
    const store = createMockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <HeaderModal setIsModalOpen={jest.fn()} />
        </Provider>
      </MemoryRouter>
    );

    const removeIcons = screen.getAllByTestId("removeIcon");

    expect(removeIcons).toHaveLength(2);
  });
  it("should empty cart when clicking in 'bag icon'", async () => {
    const initialState = {
      cart: {
        cartItems: [product, product2],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
      },
    };
    const store = createMockStore(initialState);

    // Mock para o window.confirm ser true
    window.confirm = jest.fn(() => true);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <HeaderModal setIsModalOpen={jest.fn()} />
        </Provider>
      </MemoryRouter>
    );

    const emptyBagIcon = screen.getByTestId("emptyBagIcon");

    act(() => {
      fireEvent.click(emptyBagIcon);
    });

    await waitFor(() => {
      const noItemsText = screen.getByText("No items");
      expect(noItemsText).toBeInTheDocument();
    });
  });
  it("should remove item from cart", async () => {
    const initialState = {
      cart: {
        cartItems: [product2],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
      },
    };
    const store = createMockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <HeaderModal setIsModalOpen={jest.fn()} />
        </Provider>
      </MemoryRouter>
    );

    const product = screen.getByText(/3 Seater Double Seat/i);
    expect(product).toBeInTheDocument();

    const removeIcon = screen.getByTestId("removeIcon");

    act(() => {
      fireEvent.click(removeIcon);
    });

    await waitFor(() => {
      const noItemsText = screen.getByText("No items");
      expect(noItemsText).toBeInTheDocument();
    });
  });
  it("should close modal when clicking in outside it", async () => {
    const initialState = {
      cart: {
        cartItems: [product, product2],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
      },
    };
    const store = createMockStore(initialState);

    const setIsModalOpen = jest.fn(() => true);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <HeaderModal setIsModalOpen={setIsModalOpen} />
        </Provider>
      </MemoryRouter>
    );

    const closeModalDiv = screen.getByTestId("closeModalDiv");

    act(() => {
      fireEvent.click(closeModalDiv);
    });

    await waitFor(() => {
      expect(setIsModalOpen).toHaveBeenCalledWith(false);
    });
  });
});
