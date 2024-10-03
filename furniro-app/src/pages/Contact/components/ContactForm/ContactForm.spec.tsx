import { render, screen } from "@testing-library/react";
import { ContactForm } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <ContactForm />
    </MemoryRouter>
  );
};

describe("<ContactForm />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("Your name");

    expect(text).toBeInTheDocument();
  });
});
