import { Link } from "react-router-dom";

export function FooterLinks() {
  return (
    <ul className="flex flex-wrap mb-10 md:mb-0 flex-col gap-10 font-poppins font-medium text-sm">
      <li className="text-newgray-100">Links</li>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <li>
        <p className="cursor-pointer">About</p>
      </li>
      <Link to="/contact">Contact</Link>
    </ul>
  );
}
