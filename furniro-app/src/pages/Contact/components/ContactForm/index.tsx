import { useContactForm } from "../../../../hooks/useContactForm";
import { contactschema } from "../../../../schemas/contactSchema";
import { notify } from "../../../../utils/notify";
import { useEffect } from "react";
import axiosApi from "../../../../utils/axiosApi";

export function ContactForm() {
  const { register, setValue, handleSubmit, reset, errors } = useContactForm();

  const user = JSON.parse(localStorage.getItem("furniro-user")!);

  useEffect(() => {
    if (user) {
      if (user.email) {
        setValue("email", user.email);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onSubmitFunc = (data: contactschema) => {
    postMessage(data);
    reset();
  };

  const postMessage = async (data: contactschema) => {
    try {
      await axiosApi.post("/messages", {
        id: new Date(),
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });
      notify("success", "Your message has been submitted successfully!");
    } catch (error) {
      console.error("Erro ao fazer o POST: ", error);
      notify("error", "An error ocurred when trying to submit your message.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunc)}>
      <ul className="flex flex-col flex-wrap gap-10">
        <div>
          <li className="flex flex-col font-medium text-sm gap-2">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              placeholder="Abc"
              className="rounded p-4 md:w-[25rem] border border-newgray-100"
              {...register("name")}
            />
          </li>
          {errors.name && (
            <small className="text-red-500 absolute">
              {errors.name.message}
            </small>
          )}
        </div>
        <div>
          <li className="flex flex-col font-medium text-sm gap-2">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Abc@def.com"
              className="rounded p-4 md:w-[25rem] border border-newgray-100"
              {...register("email")}
            />
          </li>
          {errors.email && (
            <small className="text-red-500 absolute">
              {errors.email.message}
            </small>
          )}
        </div>
        <li className="flex flex-col font-medium text-sm gap-2">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="This is an optional"
            className="rounded p-4 md:w-[25rem] border border-newgray-100"
            {...register("subject")}
          />
        </li>
        <div>
          <li className="flex flex-col font-medium text-sm gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Hi! i'd like to ask about"
              className="rounded p-4 md:w-[25rem] border border-newgray-100 resize-none h-32"
              {...register("message")}
            ></textarea>
          </li>
          {errors.message && (
            <small className="text-red-500 absolute">
              {errors.message.message}
            </small>
          )}
        </div>
        <li className="flex justify-center md:justify-normal">
          <button
            type="submit"
            className="text-white bg-newgolden text-sm px-14 py-3 rounded hover:opacity-85 transition-all"
          >
            Submit
          </button>
        </li>
      </ul>
    </form>
  );
}
