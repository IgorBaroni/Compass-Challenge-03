import { render, screen } from "@testing-library/react";
import { FooterHelpLinks } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <FooterHelpLinks />
    </MemoryRouter>
  );
};

describe("<FooterHelpLinks />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("Payment Options");

    expect(text).toBeInTheDocument();
  });
});
