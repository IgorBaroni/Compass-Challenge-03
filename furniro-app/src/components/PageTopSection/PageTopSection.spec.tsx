import { render, screen } from "@testing-library/react";
import { PageTopSection } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <PageTopSection pageTitle="Test" />
    </MemoryRouter>
  );
};

describe("<PageTopSection />", () => {
  it("should render", () => {
    renderComponent();

    const testText = screen.getAllByText(/Test/i);

    expect(testText).toHaveLength(2);
  });

  it("should render furniro logo", () => {
    renderComponent();

    const furniroLogo = screen.getByAltText(/furniro-logo/i);

    expect(furniroLogo).toBeInTheDocument();
  });
});
