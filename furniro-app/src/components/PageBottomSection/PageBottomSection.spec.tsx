import { render, screen } from "@testing-library/react";
import { PageBottomSection } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <PageBottomSection />
    </MemoryRouter>
  );
};

describe("<PageBottomSection />", () => {
  it("should render", () => {
    renderComponent();

    const highQualityText = screen.getByText(/High Quality/i);

    expect(highQualityText).toBeInTheDocument();
  });

  it("should render icons", () => {
    renderComponent();

    const icons = screen.getAllByAltText(/icon/i);

    expect(icons).toHaveLength(4);
  });
});
