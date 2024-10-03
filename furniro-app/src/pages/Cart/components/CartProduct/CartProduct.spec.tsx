import { render, screen } from "@testing-library/react";
import { CartProduct } from ".";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../../utils/redux/store";
import { product } from "../../../../test/mockedUtils";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <CartProduct product={product} />
      </Provider>
    </MemoryRouter>
  );
};

describe("<CartProduct />", () => {
  it("should render", () => {
    renderComponent();

    const productTitle = screen.getByText(
      /3 Seater Double Sofa Bed Genoa Blue/i
    );

    expect(productTitle).toBeInTheDocument();
  });
  it("should display product subtotal", () => {
    renderComponent();

    const subTotal = screen.getByTestId("productSubTotal");

    expect(subTotal).toHaveTextContent("R$ 6400");
  });
});
