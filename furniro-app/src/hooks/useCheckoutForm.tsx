import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { checkoutSchema, checkoutschema } from "../schemas/checkoutSchema";

export const useCheckoutForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<checkoutschema>({
    resolver: zodResolver(checkoutSchema),
  });

  return { register, reset, setValue, handleSubmit, errors };
};
