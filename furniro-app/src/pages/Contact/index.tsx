import { useEffect } from "react";
import { PageBottomSection } from "../../components/PageBottomSection";
import { PageTopSection } from "../../components/PageTopSection";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
import { ContactTopSection } from "./components/ContactTopSection";

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageTopSection pageTitle="Contact" />
      <div className="font-poppins flex flex-col items-center p-10">
        <ContactTopSection />
        <div className="flex flex-wrap justify-center gap-28 md:gap-0 w-full">
          <div className="flex justify-center md:justify-normal">
            <ContactInfo />
          </div>
          <div className="flex justify-center md:justify-normal">
            <ContactForm />
          </div>
        </div>
      </div>
      <PageBottomSection />
    </div>
  );
}
