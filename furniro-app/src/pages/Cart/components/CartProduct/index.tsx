import { BiMinus, BiPlus, BiSolidTrash } from "react-icons/bi";
import { Product } from "../../../../types/Product";
import { useDispatch } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeFromCart,
} from "../../../../utils/redux/cartSlice";
import { Link } from "react-router-dom";

type CartProductProps = {
  product: Product;
};

export function CartProduct({ product }: CartProductProps) {
  const dispatch = useDispatch();

  const handleChangeQuantity = (action: string) => {
    if (action === "increase") {
      dispatch(increaseItem(product));
    } else if (action === "decrease") {
      dispatch(decreaseItem(product));
    }
  };

  const handleRemoveItem = (product: Product) => {
    if (confirm(`Remove item ${product.title}?`)) {
      dispatch(removeFromCart(product));
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-5 md:gap-0 justify-evenly  font-poppins">
      <div className="border-2 rounded-lg border-newwhite-600 bg-newwhite-600 p-1">
        <Link to={`../product/${product.id}`}>
          <img
            src={product.images.mainImage}
            alt={product.description.short}
            className="w-[4rem] rounded-lg cursor-pointer"
          />
        </Link>
      </div>
      <div>
        <p className="text-newgray-100 md:mr-10 text-start w-[10rem]">
          {product.title}
        </p>
      </div>
      <div className="md:mr-2">
        <p className="text-newgray-100 hidden md:flex">
          R$ {product.normalPrice.toFixed(0)}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-around border bg-white text-center py-3 w-[7rem] border-newgray-100 rounded-2xl font-medium md:ml-5">
          <div
            className="cursor-pointer"
            onClick={() => handleChangeQuantity("decrease")}
            data-testid="decreaseIcon"
          >
            <BiMinus />
          </div>
          <div className="select-none" data-testid="cartQuantity">
            {product.cartQuantity}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleChangeQuantity("increase")}
            data-testid="increaseIcon"
          >
            <BiPlus />
          </div>
        </div>
      </div>
      <div>
        <p className="text-newgray-100 md:ml-5" data-testid="productSubTotal">
          R$ {(product.normalPrice * product.cartQuantity).toFixed(0)}
        </p>
      </div>
      <div>
        <BiSolidTrash
          color="#B88E2F"
          size={"1.5rem"}
          cursor={"pointer"}
          data-testid="trashCan"
          onClick={() => handleRemoveItem(product)}
        />
      </div>
    </div>
  );
}
