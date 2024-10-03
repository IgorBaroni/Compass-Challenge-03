import { render, screen } from "@testing-library/react";
import { FooterSocialLinks } from ".";
import { MemoryRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <FooterSocialLinks />
    </MemoryRouter>
  );
};

describe("<FooterSocialLinks />", () => {
  it("should render", () => {
    renderComponent();

    const facebookIcon = screen.getByAltText(/facebook-icon/i);

    expect(facebookIcon).toBeInTheDocument();
  });
});
