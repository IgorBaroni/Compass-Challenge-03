import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Login } from ".";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/redux/store";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </MemoryRouter>
  );
};

// Silencia os erros de console (console.error) antes de todos os testes
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

describe("<Login />", () => {
  it("should render", () => {
    renderComponent();

    const signInText = screen.getByText("Sign in");

    expect(signInText).toBeInTheDocument();
  });

  it("should display error message when trying to login without data", async () => {
    renderComponent();

    const button = screen.getByRole("button", { name: "Login" });

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      const errorMessage = screen.getByText(/You must provide your email./i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("should not display error message when trying to submit message with data", async () => {
    renderComponent();

    const button = screen.getByRole("button", { name: "Login" });
    const emailInput = screen.getByPlaceholderText("Enter your email address");
    const passwordInput = screen.getByPlaceholderText("Enter your password");

    act(() => {
      fireEvent.change(emailInput, { target: { value: "igor@gmail.com" } });
      fireEvent.change(passwordInput, { target: { value: "Igor" } });
      fireEvent.click(button);
    });

    await waitFor(() => {
      const errorMessage = screen.queryByText(/You must provide your email./i);
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  it("should change password input type when clicking in eye icon", async () => {
    renderComponent();

    const eyeIcon = screen.getByTestId("eyeIcon");
    const passwordInput = screen.getByPlaceholderText(
      "Enter your password"
    ) as HTMLInputElement;

    expect(passwordInput.type).toBe("password");

    act(() => {
      fireEvent.click(eyeIcon);
    });

    await waitFor(() => {
      expect(passwordInput.type).toBe("text");
    });
  });
});
