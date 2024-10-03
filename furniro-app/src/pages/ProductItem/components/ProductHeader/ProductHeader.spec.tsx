import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductHeader } from ".";
import { product } from "../../../../test/mockedUtils";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <ProductHeader title={product.title} />
    </MemoryRouter>
  );
};

describe("<ProductHeader />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText(/3 Seater Double Sofa Bed Genoa Blue/i);

    expect(text).toBeInTheDocument();
  });
});
