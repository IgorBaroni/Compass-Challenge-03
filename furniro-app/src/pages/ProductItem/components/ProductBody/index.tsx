import { FormEvent, useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
  BiMinus,
  BiPlus,
} from "react-icons/bi";
import { Product } from "../../../../types/Product";
import { ProductRatingStars } from "../ProductRatingStars";
import { SizeButton } from "../SizeButton";
import { addToCart, getTotals } from "../../../../utils/redux/cartSlice";
import { useDispatch } from "react-redux";

type ProductBodyProps = {
  product: Product;
};

export function ProductBody({ product }: ProductBodyProps) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  const handleChangeQuantity = (action: string) => {
    if (action === "increase") {
      setQuantity((prevQuant) => prevQuant + 1);
    } else if (action === "decrease") {
      if (quantity == 1) return;
      setQuantity((prevQuant) => prevQuant - 1);
    }
  };

  const handleAddToCard = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addToCart({ ...product, newQuantity: quantity }));
    dispatch(getTotals());
  };

  return (
    <div>
      <div className="md:px-24 px-2 flex flex-wrap justify-center gap-10 md:gap-0 md:justify-between">
        <div className="flex flex-wrap  gap-5 h-full">
          <div className="flex flex-row md:flex-col gap-5">
            {product.images.gallery.map((image, index) => (
              <div
                className="border-2 rounded-lg border-newwhite-600"
                key={index}
              >
                <img
                  src={image}
                  alt={product.description.long}
                  className="w-[4rem] rounded-lg cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="border-2 rounded-lg border-newwhite-600">
            <img
              src={product.images.mainImage}
              alt={product.description.long}
              className="md:w-[30rem] rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center md:text-start md:items-start gap-3 w-full md:w-[40%]">
          <div>
            <p className="text-3xl">{product.title}</p>
            <p className="text-2xl text-newgray-100 mt-5 md:mt-2">
              R$ {product.normalPrice}
            </p>
          </div>
          <div>
            <ProductRatingStars rating={product.rating} />
          </div>
          <div>
            <p className="text-justify">{product.description.short}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-newgray-100">Size</p>
            <div className="flex gap-3">
              {product.sizes.map((size, index) => (
                <SizeButton size={size} index={index} key={index} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-newgray-100 mb-1">Color</p>
            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <div
                  className={"size-8 rounded-full"}
                  style={{ backgroundColor: color.hex }}
                  key={index}
                ></div>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <form
              className="flex flex-wrap justify-center md:justify-normal items-center gap-3"
              onSubmit={(e) => handleAddToCard(e)}
            >
              <div className="flex items-center justify-around border bg-white text-center py-3 w-[10rem] border-newgray-100 rounded-2xl font-medium">
                <div
                  className="cursor-pointer"
                  onClick={() => handleChangeQuantity("decrease")}
                  data-testid="decreaseIcon"
                >
                  <BiMinus />
                </div>
                <div className="select-none" data-testid="productQuant">
                  {quantity}
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => handleChangeQuantity("increase")}
                  data-testid="increaseIcon"
                >
                  <BiPlus />
                </div>
              </div>
              <button
                className="border py-3 px-10 border-black rounded-2xl select-none"
                type="submit"
              >
                Add To Cart
              </button>
            </form>
          </div>
          <div className=" mt-3 w-full">
            <div className="border-t border-newgray-50">
              <div className="mt-3">
                <ul className="flex flex-col gap-2">
                  <li className="text-newgray-100 flex gap-14">
                    <span>SKU</span>
                    <span>: {product.sku}</span>
                  </li>
                  <li className="text-newgray-100 flex gap-3">
                    <span>Category</span>
                    <span>: {product.category}</span>
                  </li>
                  <li className="text-newgray-100 flex gap-7 md:gap-[3.1rem]">
                    <span>Tags</span>
                    <span>
                      :{" "}
                      {product.tags.map((tag, index) => (
                        <span key={index}>
                          {tag}
                          {index < product.tags.length - 1 && ", "}
                        </span>
                      ))}
                    </span>
                  </li>
                  <li className="text-newgray-100 flex gap-[2.7rem]">
                    <span>Share</span>
                    <div className="flex gap-3 items-center">
                      <span>:</span>
                      <BiLogoFacebookCircle
                        color="black"
                        size={"1.5rem"}
                        cursor={"pointer"}
                      />
                      <BiLogoLinkedinSquare
                        color="black"
                        size={"1.5rem"}
                        cursor={"pointer"}
                      />
                      <AiFillTwitterCircle
                        color="black"
                        size={"1.5rem"}
                        cursor={"pointer"}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-10 mt-5 border-t border-newgray-50">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center px-4 md:px-40 gap-5">
            <div className="flex flex-wrap gap-3 justify-center md:justify-normal md:gap-20">
              <p className="text-xl font-medium">Description</p>
              <p className="text-xl text-newgray-100 cursor-pointer hover:text-black transition-all">
                Additional Information
              </p>
            </div>
            <div className="text-justify text-newgray-100 flex flex-col gap-5">
              <p>{product.description.short}</p>
              <p>{product.description.long}</p>
            </div>
            <div className="flex flex-wrap w-full justify-center gap-10 md:gap-32">
              <img
                src={product.images.gallery[0]}
                alt={product.description.short}
                className="w-[20rem] rounded"
              />
              <img
                src={product.images.gallery[1]}
                alt={product.description.short}
                className="w-[20rem] rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
