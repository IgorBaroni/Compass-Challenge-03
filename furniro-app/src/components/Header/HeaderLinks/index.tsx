import { Link } from "react-router-dom";

export function HeaderLinks() {
  return (
    <ul className="flex flex-wrap justify-center gap-5 md:gap-10">
      <li className="header-option">
        <Link to="/">Home</Link>
      </li>
      <li className="header-option">
        <Link to="/shop">Shop</Link>
      </li>
      <li className="header-option">
        <p className="cursor-pointer">About</p>
      </li>
      <li className="header-option">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}
