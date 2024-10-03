import { render, screen } from "@testing-library/react";
import { HeaderActions } from ".";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../utils/redux/store";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <HeaderActions />
      </Provider>
    </MemoryRouter>
  );
};

describe("<HeaderActions />", () => {
  it("should render", () => {
    renderComponent();

    const cartIcon = screen.getByAltText(/cart-icon/i);

    expect(cartIcon).toBeInTheDocument();
  });
});
