import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Footer } from ".";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/redux/store";
import { Home } from "../../pages/Home";
import { Shop } from "../../pages/Shop";

// Mock para window.scrollTo
beforeAll(() => {
  window.scrollTo = jest.fn();
});

// Silencia os erros de console (console.error) antes de todos os testes
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

// Restaura todos os mocks depois de todos os testes
afterAll(() => {
  jest.restoreAllMocks();
});

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Provider>
    </MemoryRouter>
  );
};

describe("<Footer />", () => {
  it("should render", () => {
    renderComponent();

    const logoText = screen.getByText("Furniro.");

    expect(logoText).toBeInTheDocument();
  });
  it("should go to Shop page when clicking in Shop option", async () => {
    renderComponent();

    const shopOption = screen.getByText("Shop");

    act(() => {
      fireEvent.click(shopOption);
    });

    await waitFor(() => {
      const filterText = screen.getByText(/filter/i);

      expect(filterText).toBeInTheDocument();
    });
  });
  it("should not go to Shop page when clicking in Home option", async () => {
    renderComponent();

    const shopOption = screen.getByText("Home");

    act(() => {
      fireEvent.click(shopOption);
    });

    await waitFor(() => {
      const filterText = screen.queryByText(/filter/i);

      expect(filterText).not.toBeInTheDocument();
    });
  });
  it("should subscribe to newsletter when clicking in subscribe button with email set", async () => {
    renderComponent();

    const subscribeButton = screen.getByRole("button", { name: "Subscribe" });
    const emailInput = screen.getByPlaceholderText(/Enter your email address/i);

    act(() => {
      fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
      fireEvent.click(subscribeButton);
    });

    await waitFor(() => {
      expect(emailInput).toHaveValue("");
    });
  });
});
