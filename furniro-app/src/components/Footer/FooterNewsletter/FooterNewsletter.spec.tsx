import { render, screen } from "@testing-library/react";
import { FooterNewsletter } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <FooterNewsletter />
    </MemoryRouter>
  );
};

describe("<FooterNewsletter />", () => {
  it("should render", () => {
    renderComponent();

    const button = screen.getByRole("button", { name: "Subscribe" });

    expect(button).toBeInTheDocument();
  });
});
