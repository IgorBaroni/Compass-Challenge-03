import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Header } from ".";
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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Provider>
    </MemoryRouter>
  );
};

describe("<Header />", () => {
  it("should render", () => {
    renderComponent();

    const logoText = screen.getByText("Furniro");

    expect(logoText).toBeInTheDocument();
  });
  it("should go to Home page when clicking in Header option", async () => {
    renderComponent();

    const headerOption = screen.getByText("Home");

    act(() => {
      fireEvent.click(headerOption);
    });

    await waitFor(() => {
      const newArrivalText = screen.getByText(/New Arrival/i);
      expect(newArrivalText).toBeInTheDocument();
    });
  });
  it("should not go to Home page when clicking in Shop option", async () => {
    renderComponent();

    const shopOption = screen.getByText("Shop");

    act(() => {
      fireEvent.click(shopOption);
    });

    await waitFor(() => {
      const newArrivalText = screen.queryByText(/New Arrival/i);

      expect(newArrivalText).not.toBeInTheDocument();
    });
  });
  it("should open cart modal when clicking in Cart option", async () => {
    renderComponent();
    const cartOption = screen.getByAltText(/cart-icon/i);

    act(() => {
      fireEvent.click(cartOption);
    });

    await waitFor(() => {
      const shoppingCartText = screen.getByText(/Shopping Cart/i);

      expect(shoppingCartText).toBeInTheDocument();
    });
  });
});
