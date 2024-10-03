import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ShopMain } from ".";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <ShopMain />
    </MemoryRouter>
  );
};

describe("<ShopMain />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("Filter");

    expect(text).toBeInTheDocument();
  });
});
