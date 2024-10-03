import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Shop } from "../../pages/Shop";
import { Home } from ".";

// Mock para window.scrollTo
beforeAll(() => {
  window.scrollTo = jest.fn();
});

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("<Home />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText("New Arrival");

    expect(text).toBeInTheDocument();
  });
  it("should go to Shop page when clicking 'BUY NOW' button", async () => {
    renderComponent();

    const button = screen.getByText(/Buy Now/i);

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      const texts = screen.getAllByText("Shop");

      expect(texts).toHaveLength(2);
    });
  });
  it("should go to Shop page when clicking 'Explore More' button", async () => {
    renderComponent();

    const button = screen.getByText(/Explore More/i);

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      const texts = screen.getAllByText("Shop");

      expect(texts).toHaveLength(2);
    });
  });
});
