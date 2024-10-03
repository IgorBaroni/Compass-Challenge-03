import { useEffect } from "react";
import { PageBottomSection } from "../../components/PageBottomSection";
import { PageTopSection } from "../../components/PageTopSection";
import { CartProductsHeader } from "./components/CartProductsHeader";
import { CartTotal } from "./components/CartTotal";
import { CartProduct } from "./components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../types/Product";
import { RootState } from "../../utils/redux/store";
import { Link } from "react-router-dom";
import { getTotals } from "../../utils/redux/cartSlice";

export function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div>
      <PageTopSection pageTitle="Cart" />
      {cart.cartItems.length === 0 ? (
        <p className="text-2xl py-20 px-10 font-poppins font-medium text-center">
          You do not have any products in your cart yet.
          <br />
          <br />
          Start adding in{" "}
          <Link to={"/shop"} className="underline text-newgolden">
            Shop
          </Link>
        </p>
      ) : (
        <div className="flex flex-col px-4 gap-10 py-20 md:flex-row md:px-20">
          <div className="md:w-[70%]">
            <CartProductsHeader />
            <div className="mt-10">
              <ul className="flex flex-col gap-10">
                {cart.cartItems.map((cartItem: Product) => (
                  <li key={cartItem.id}>
                    <CartProduct product={cartItem} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-[30%]">
            <CartTotal />
          </div>
        </div>
      )}
      <PageBottomSection />
    </div>
  );
}
