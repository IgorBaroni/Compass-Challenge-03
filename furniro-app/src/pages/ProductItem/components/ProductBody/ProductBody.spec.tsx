import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductBody } from ".";
import { Provider } from "react-redux";
import store from "../../../../utils/redux/store";
import { product } from "../../../../test/mockedUtils";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <ProductBody product={product} />
      </Provider>
    </MemoryRouter>
  );
};

describe("<ProductBody />", () => {
  it("should render", () => {
    renderComponent();

    const text = screen.getByText(/3 Seater Double Sofa Bed Genoa Blue/i);

    expect(text).toBeInTheDocument();
  });
});
