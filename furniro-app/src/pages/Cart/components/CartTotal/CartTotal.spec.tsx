import { render, screen } from "@testing-library/react";
import { CartTotal } from ".";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../../utils/redux/store";
import { createMockStore } from "../../../../test/mockedUtils";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <CartTotal />
      </Provider>
    </MemoryRouter>
  );
};

describe("<CartTotal />", () => {
  it("should render", () => {
    renderComponent();

    const title = screen.getByText("Cart Totals");

    expect(title).toBeInTheDocument();
  });

  it("should not display cartTotalAmount when user doesn't have any products", () => {
    renderComponent();

    const total = screen.getByTestId("total");

    expect(total).toHaveTextContent("R$ 0");
  });

  it("should display cartTotalAmount", () => {
    const initialState = {
      cart: {
        cartItems: [{}],
        cartTotalQuantity: 0,
        cartTotalAmount: 100,
      },
    };
    const store = createMockStore(initialState);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <CartTotal />
        </Provider>
      </MemoryRouter>
    );

    const total = screen.getByTestId("total");

    expect(total).not.toHaveTextContent("R$ 0");
  });
});
