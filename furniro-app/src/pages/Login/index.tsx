import { LoginForm } from "./components/LoginForm";

export function Login() {
  return (
    <div className="flex flex-col gap-10 md:gap-0 md:grid md:grid-cols-2 h-screen bg-login p-10">
      <div className="flex justify-center items-center md:ml-36">
        <img
          src="./src/assets/furniro-login.png"
          alt="furniro"
          className="w-[25rem]"
        />
      </div>
      <div className="flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
}
