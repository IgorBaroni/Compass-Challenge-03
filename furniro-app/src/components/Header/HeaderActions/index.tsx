import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../utils/redux/store";
import { useState } from "react";
import { HeaderModal } from "../HeaderModal";

export function HeaderActions() {
  const cart = useSelector((state: RootState) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("furniro-user");
  };

  const handleModalOpen = () =>
    !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false);

  return (
    <ul className="flex gap-10">
      <li>{isModalOpen && <HeaderModal setIsModalOpen={setIsModalOpen} />}</li>
      <li>
        <Link to="/login" onClick={handleLogout}>
          <img src="../src/assets/icon/user.svg" alt="user-icon" />
        </Link>
      </li>
      <li className="cursor-pointer" onClick={handleModalOpen}>
        {cart.cartTotalQuantity > 0 && !isModalOpen ? (
          <div>
            <div
              className="absolute font-poppins text-base size-6 transform translate-x-1/2 -translate-y-1/2 bg-newgolden text-center text-white rounded-full"
              data-testid="cartQuantity"
            >
              {cart.cartTotalQuantity}
            </div>
            <img src="../src/assets/icon/cart.svg" alt="cart-icon" />
          </div>
        ) : (
          <div>
            <img src="../src/assets/icon/cart.svg" alt="cart-icon" />
          </div>
        )}
      </li>
    </ul>
  );
}
