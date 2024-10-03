import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomeSliderSection } from ".";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <HomeSliderSection />
    </MemoryRouter>
  );
};

describe("<HomeSliderSection />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("50+ Beautiful rooms inspiration");

    expect(text).toBeInTheDocument();
  });
});
