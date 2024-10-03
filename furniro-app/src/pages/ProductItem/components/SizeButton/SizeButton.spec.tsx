import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SizeButton } from ".";
import { product } from "../../../../test/mockedUtils";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <SizeButton index={0} size="L" />
    </MemoryRouter>
  );
};

describe("<SizeButton />", () => {
  it("should render", () => {
    renderComponent();

    const size = screen.getByText("L");

    expect(size).toBeInTheDocument();
  });
  it("should display size buttons based on product sizes", () => {
    render(
      <MemoryRouter>
        {product.sizes.map((size, index) => (
          <SizeButton index={index} size={size} key={index} />
        ))}
      </MemoryRouter>
    );

    const size1 = screen.getByText("M");
    const size2 = screen.getByText("L");

    expect(size1).toBeInTheDocument();
    expect(size2).toBeInTheDocument();
  });
});
