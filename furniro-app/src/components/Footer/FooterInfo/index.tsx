import { FooterSocialLinks } from "../FooterSocialLinks";

export function FooterInfo() {
  return (
    <ul className="flex flex-wrap mb-10 md:mb-0 flex-col gap-12 font-poppins font-medium text-sm w-64">
      <li>
        <h1 className="font-poppins font-bold text-xl">Furniro.</h1>
      </li>
      <li>
        <p className="font-poppins text-newgray-100 text-sm font-normal">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>
      </li>
      <li>
        <FooterSocialLinks />
      </li>
    </ul>
  );
}
