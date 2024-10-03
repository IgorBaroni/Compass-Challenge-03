import { render, screen } from "@testing-library/react";
import { LoginForm } from ".";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../../utils/redux/store";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <LoginForm />
      </Provider>
    </MemoryRouter>
  );
};

// Silencia os erros de console (console.error) antes de todos os testes
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

describe("<LoginForm />", () => {
  it("should render", () => {
    renderComponent();

    const signInText = screen.getByText("Sign in");

    expect(signInText).toBeInTheDocument();
  });
});
