import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Contact } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );
};

// Mock para window.scrollTo
beforeAll(() => {
  window.scrollTo = jest.fn();
});

describe("<Contact />", () => {
  it("should render", () => {
    renderComponent();

    const texts = screen.getAllByText("Contact");

    expect(texts).toHaveLength(2);
  });

  it("should display error message when trying to submit message without data", async () => {
    renderComponent();

    const button = screen.getByRole("button", { name: "Submit" });

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      const errorMessage = screen.getByText(/You must provide your name./i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("should not display error message when trying to submit message with data", async () => {
    renderComponent();

    const button = screen.getByRole("button", { name: "Submit" });
    const nameInput = screen.getByPlaceholderText("Abc");
    const emailInput = screen.getByPlaceholderText("Abc@def.com");
    const messageInput = screen.getByPlaceholderText(
      "Hi! i'd like to ask about"
    );

    act(() => {
      fireEvent.change(nameInput, { target: { value: "Igor" } });
      fireEvent.change(emailInput, { target: { value: "igor@gmail.com" } });
      fireEvent.change(messageInput, { target: { value: "hello" } });
      fireEvent.click(button);
    });

    await waitFor(() => {
      const errorMessage = screen.queryByText(/You must provide your name./i);
      expect(errorMessage).not.toBeInTheDocument();
    });
  });
});
