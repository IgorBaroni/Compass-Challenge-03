import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const user = JSON.parse(localStorage.getItem("furniro-user")!);

  return user ? children : <Navigate to={"/"} />;
}
