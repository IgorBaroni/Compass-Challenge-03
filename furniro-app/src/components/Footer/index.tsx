import { FooterLinks } from "./FooterLinks";
import { FooterHelpLinks } from "./FooterHelpLinks";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterInfo } from "./FooterInfo";

export function Footer() {
  return (
    <footer className="border-t border-t-newgray-50 p-10">
      <div className="flex flex-col md:flex-row flex-wrap justify-around ">
        <FooterInfo />
        <FooterLinks />
        <FooterHelpLinks />
        <FooterNewsletter />
      </div>
      <div className="mt-10 md:px-[4.5rem]">
        <div className="border-t border-t-newgray-50"></div>
        <h2 className="mt-8 font-poppins text-sm font-medium ">
          2023 furniro. All rights reserved
        </h2>
      </div>
    </footer>
  );
}
