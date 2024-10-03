import { notify } from "../../../utils/notify";
import { FormEvent, useState } from "react";
import axiosApi from "../../../utils/axiosApi";

export function FooterNewsletter() {
  const [email, setEmail] = useState<string>("");

  const postNewsLetter = async () => {
    try {
      await axiosApi.post("/newsletters", {
        id: new Date(),
        email: email,
      });
      notify("success", "Successfully subscribed to our newsletter!");
    } catch (error) {
      console.error("Erro ao fazer o POST: ", error);
      notify(
        "error",
        "An error ocurred when trying to subscribe to our newsletter."
      );
    }
    setEmail("");
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    postNewsLetter();
  };

  return (
    <ul className="flex flex-col gap-5 font-poppins font-medium text-sm">
      <li className="mb-6 text-newgray-100">Newsletter</li>
      <li>
        <form className="flex flex-wrap gap-5" onSubmit={handleFormSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email Address"
            className="border-b border-black font-normal text-sm outline-none w-48"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="border-b border-black uppercase">
            Subscribe
          </button>
        </form>
      </li>
    </ul>
  );
}
