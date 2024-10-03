import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../utils/redux/store";

export function CartTotal() {
  const { cartTotalAmount } = useSelector((state: RootState) => state.cart);
  const user = JSON.parse(localStorage.getItem("furniro-user")!);

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="p-12 font-poppins bg-newwhite-600 rounded flex flex-col items-center gap-5">
      <h1 className="text-2xl font-semibold">Cart Totals</h1>
      <div className="flex gap-10 items-center">
        <p className="text-base font-medium">Subtotal</p>
        <span className="text-newgray-100">
          R$ {cartTotalAmount.toFixed(0)}
        </span>
      </div>
      <div className="flex gap-10 items-center">
        <p className="font-medium">Total</p>
        <span
          className="text-newgolden text-lg font-medium"
          data-testid="total"
        >
          R$ {cartTotalAmount.toFixed(0)}
        </span>
      </div>
      {user ? (
        <button
          className="border py-2 px-8 border-black rounded-2xl"
          onClick={handleCheckout}
        >
          Check Out
        </button>
      ) : (
        <button
          className="border py-2 px-8 border-black rounded-2xl"
          onClick={handleLogin}
        >
          Login
        </button>
      )}
    </div>
  );
}
