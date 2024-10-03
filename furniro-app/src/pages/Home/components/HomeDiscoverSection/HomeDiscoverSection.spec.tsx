import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomeDiscoverSection } from ".";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <HomeDiscoverSection />
    </MemoryRouter>
  );
};

describe("<HomeDiscoverSection />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("New Arrival");

    expect(text).toBeInTheDocument();
  });
});
