import { HeaderLinks } from "./HeaderLinks";
import { HeaderActions } from "./HeaderActions";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="py-5 px-12 flex flex-col md:flex-row gap-5 md:gap-0 flex-wrap items-center justify-between">
      <div>
        <Link to="/">
          <ul className="flex gap-1 justify-center">
            <li>
              <img src="../src/assets/furniro-logo.png" alt="furniro-logo" />
            </li>
            <li>
              <h1 className="font-montserrat font-bold text-3xl">Furniro</h1>
            </li>
          </ul>
        </Link>
      </div>
      <div className="order-2 md:order-1">
        <HeaderLinks />
      </div>
      <div className="order-1">
        <HeaderActions />
      </div>
    </header>
  );
}
