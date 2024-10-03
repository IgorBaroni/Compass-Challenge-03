import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useLoginForm } from "../../../../hooks/useLoginForm";
import { loginschema } from "../../../../schemas/loginSchema";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../../auth/config";
import { notify } from "../../../../utils/notify";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;

    if (!showPassword) {
      setShowPassword(true);
      passwordInput.type = "text";
    } else {
      setShowPassword(false);
      passwordInput.type = "password";
    }
  };

  const { register, handleSubmit, errors } = useLoginForm();

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleAuthLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(email, password).then((data) => {
      if (data?.user === undefined) {
        notify("error", "User was not found!");
      } else {
        notify("success", "Successfully logged in!");
        const user = {
          email: data?.user.email,
        };
        localStorage.setItem("furniro-user", JSON.stringify(user));
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 4000);
      }
    });
  };

  const onSubmitFunc = (data: loginschema) => {
    handleAuthLogin(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunc)}>
      <ul className="flex flex-col items-center gap-10 bg-white/30 backdrop-blur-sm rounded p-4 md:px-16 md:py-10 font-poppins font-normal">
        <li>
          <h1 className="text-2xl font-medium">Sign in</h1>
        </li>
        <li>
          <label htmlFor="email">Email:</label>
          <div className="flex items-center gap-3 bg-white rounded pr-2">
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="outline-none p-1 rounded"
              {...register("email")}
            />
            <MdOutlineEmail className="text-2xl" />
          </div>
          {errors.email && (
            <small className="text-red-500 absolute">
              {errors.email.message}
            </small>
          )}
        </li>
        <li>
          <label htmlFor="password">Password:</label>
          <div className="flex items-center justify-center gap-3 bg-white rounded pr-2">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="outline-none p-1 rounded"
              {...register("password")}
            />
            <li onClick={handleShowPassword} data-testid="eyeIcon">
              {showPassword ? (
                <FaRegEyeSlash className="text-2xl cursor-pointer" />
              ) : (
                <FaRegEye className="text-2xl cursor-pointer" />
              )}
            </li>
          </div>
          {errors.password && (
            <small className="text-red-500 absolute">
              {errors.password.message}
            </small>
          )}
        </li>
        <li>
          <button
            type="submit"
            className="px-5 py-3 rounded uppercase bg-newgolden text-white hover:opacity-85 transition-all"
          >
            Login
          </button>
        </li>
      </ul>
    </form>
  );
}
