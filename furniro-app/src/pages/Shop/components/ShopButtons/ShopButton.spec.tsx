import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ShopButton } from ".";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <ShopButton />
    </MemoryRouter>
  );
};

describe("<ShopButton />", () => {
  it("should render", () => {
    renderComponent();

    const nextButton = screen.getByRole("button", { name: "Next" });

    expect(nextButton).toBeInTheDocument();
  });
});
