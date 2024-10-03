import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomeCategoriesSection } from ".";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <HomeCategoriesSection />
    </MemoryRouter>
  );
};

describe("<HomeCategoriesSection />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("Browse The Range");

    expect(text).toBeInTheDocument();
  });
});
