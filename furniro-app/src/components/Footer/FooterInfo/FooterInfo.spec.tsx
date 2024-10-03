import { render, screen } from "@testing-library/react";
import { FooterInfo } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <FooterInfo />
    </MemoryRouter>
  );
};

describe("<FooterInfo />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("Furniro.");

    expect(text).toBeInTheDocument();
  });
});
