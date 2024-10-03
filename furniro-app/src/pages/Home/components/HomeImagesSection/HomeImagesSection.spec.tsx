import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomeImagesSection } from ".";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <HomeImagesSection />
    </MemoryRouter>
  );
};

describe("<HomeImagesSection />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("#FurniroFurniture");

    expect(text).toBeInTheDocument();
  });
});
