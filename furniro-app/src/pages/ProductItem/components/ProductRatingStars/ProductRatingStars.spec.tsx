import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductRatingStars } from ".";
import { Provider } from "react-redux";
import store from "../../../../utils/redux/store";
import { product } from "../../../../test/mockedUtils";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <ProductRatingStars rating={product.rating} />
      </Provider>
    </MemoryRouter>
  );
};

describe("<ProductRatingStars />", () => {
  it("should render", () => {
    renderComponent();

    const svgs = screen.getAllByTestId("solidStar");

    expect(svgs).toHaveLength(4);
  });
  it("should display stars based on rating number", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductRatingStars rating={1.5} />
        </Provider>
      </MemoryRouter>
    );

    const svgs = screen.getAllByTestId("solidStar");

    expect(svgs).toHaveLength(1);
  });
});
