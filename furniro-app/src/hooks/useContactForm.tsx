import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactSchema, contactschema } from "../schemas/contactSchema";

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<contactschema>({
    resolver: zodResolver(contactSchema),
  });

  return { register, setValue, handleSubmit, reset, errors };
};
