import { render, screen } from "@testing-library/react";
import { ContactTopSection } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <ContactTopSection />
    </MemoryRouter>
  );
};

describe("<ContactTopSection />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText(/Get In Touch With Us/i);

    expect(text).toBeInTheDocument();
  });
});
