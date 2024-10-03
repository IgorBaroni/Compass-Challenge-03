import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Shop } from "../../pages/Shop";
import { Provider } from "react-redux";
import store from "../../utils/redux/store";
// Mock para window.scrollTo
beforeAll(() => {
  window.scrollTo = jest.fn();
});

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Shop />
      </Provider>
    </MemoryRouter>
  );
};

describe("<Shop />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getAllByText("Shop");

    expect(text).toHaveLength(2);
  });
  it("should display error message when products are not found", () => {
    renderComponent();

    const text = screen.getByText("Products not found");

    expect(text).toBeInTheDocument();
  });
});
