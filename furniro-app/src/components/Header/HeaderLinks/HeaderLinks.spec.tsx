import { render, screen } from "@testing-library/react";
import { HeaderLinks } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <HeaderLinks />
    </MemoryRouter>
  );
};

describe("<HeaderLinks />", () => {
  it("should render", () => {
    renderComponent();

    const homeText = screen.getByText(/Home/i);

    expect(homeText).toBeInTheDocument();
  });
});
