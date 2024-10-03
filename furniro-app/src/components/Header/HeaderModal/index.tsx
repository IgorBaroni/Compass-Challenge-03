import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  cleanCart,
  getTotals,
  removeFromCart,
} from "../../../utils/redux/cartSlice";
import { RootState } from "../../../utils/redux/store";
import { Product } from "../../../types/Product";
import { BsBagX } from "react-icons/bs";

type HeaderModalProps = {
  setIsModalOpen: (arg0: boolean) => void;
};

export function HeaderModal({ setIsModalOpen }: HeaderModalProps) {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("furniro-user")!);

  const handleCleanCart = () => {
    if (cart.cartItems.length > 0) {
      if (confirm("Do you want to empty your cart?")) {
        dispatch(cleanCart());
        dispatch(getTotals());
      }
    }
  };

  const handleRemoveItem = (item: Product) => {
    dispatch(removeFromCart(item));
    dispatch(getTotals());
  };
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-black/20"
      onClick={() => setIsModalOpen(false)}
      data-testid="closeModalDiv"
    >
      <div
        className="absolute right-0 bg-white p-2 md:p-4 font-poppins z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Shopping Cart</p>
          <BsBagX
            color="#9F9F9F"
            cursor={"pointer"}
            data-testid="emptyBagIcon"
            onClick={() => handleCleanCart()}
          />
        </div>
        <div className="border-t mt-2">
          <ul className="mt-2 flex flex-col gap-5">
            {cart.cartItems.length === 0 && (
              <li className="text-center">No items</li>
            )}
            {cart.cartItems.map((item: Product) => (
              <li
                className="flex gap-3 items-center justify-between"
                key={item.id}
              >
                <div className="border-newwhite-600 bg-newwhite-600 p-1 rounded">
                  <Link to={`../product/${item.id}`}>
                    <img
                      src={item.images.mainImage}
                      alt={item.description.short}
                      className="w-[4rem] rounded-lg cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="flex flex-col">
                  <p>{item.title.slice(0, 20).trimEnd()}...</p>
                  <p>
                    {item.cartQuantity} X{" "}
                    <span className="text-newgolden font-medium">
                      R$ {item.normalPrice.toFixed(0)}
                    </span>
                  </p>
                </div>
                <div
                  className="bg-newgray-100 rounded-full text-white px-1.5 text-sm cursor-pointer"
                  onClick={() => handleRemoveItem(item)}
                  data-testid="removeIcon"
                >
                  X
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex justify-between">
          <p>Subtotal</p>
          <p className="text-newgolden font-medium">
            R$ {cart.cartTotalAmount.toFixed(0)}
          </p>
        </div>
        <div className="border-t mt-2 mb-5"></div>
        <div className="mt-2 flex gap-3 items-center">
          <Link
            to={"/cart"}
            className="px-4 border text-sm border-black rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            Cart
          </Link>
          {user ? (
            cart.cartItems.length > 0 && (
              <Link
                to={"/checkout"}
                className="px-4 border text-sm border-black rounded-full"
                onClick={() => setIsModalOpen(false)}
              >
                Checkout
              </Link>
            )
          ) : (
            <Link
              to={"/login"}
              className="px-4 border text-sm border-black rounded-full"
            >
              Login
            </Link>
          )}
          <p className="px-4 border text-sm border-black rounded-full cursor-pointer">
            Comparison
          </p>
        </div>
      </div>
    </div>
  );
}
