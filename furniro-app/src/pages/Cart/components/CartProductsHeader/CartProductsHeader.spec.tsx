import { render, screen } from "@testing-library/react";
import { CartProductsHeader } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <CartProductsHeader />
    </MemoryRouter>
  );
};

describe("<CartProductsHeader />", () => {
  it("should render", () => {
    renderComponent();

    const productTitle = screen.getByText("Product");

    expect(productTitle).toBeInTheDocument();
  });
});
