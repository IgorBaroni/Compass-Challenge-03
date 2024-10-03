import { render, screen } from "@testing-library/react";
import { FooterLinks } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <FooterLinks />
    </MemoryRouter>
  );
};

describe("<FooterLinks />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("Home");

    expect(text).toBeInTheDocument();
  });
});
