import { render, screen } from "@testing-library/react";
import { ContactInfo } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <ContactInfo />
    </MemoryRouter>
  );
};

describe("<ContactInfo />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("Address");

    expect(text).toBeInTheDocument();
  });
});
