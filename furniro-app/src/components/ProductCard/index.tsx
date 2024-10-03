import { Product } from "../../types/Product";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "../../utils/redux/cartSlice";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    product: Product
  ) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    dispatch(getTotals());
  };

  const handleProductItemView = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <div
        className="border-2 flex flex-col rounded font-poppins w-[13rem] h-[20rem] group hover:bg-black/90 justify-center cursor-pointer"
        onClick={() => handleProductItemView(product.id)}
      >
        <div className="flex justify-end group-hover:opacity-50 opacity-100">
          <div className="flex gap-3 absolute p-1">
            {product.discountPercentage * 100 !== 0 && (
              <div className="bg-newred px-1.5 py-3 rounded-full z-10">
                <span className="text-sm text-white">
                  -{(product.discountPercentage * 100).toFixed(0)}%
                </span>
              </div>
            )}
            {product.new && (
              <div className="bg-newcyan px-2 py-3 rounded-full z-10">
                <span className="text-sm text-white">New</span>
              </div>
            )}
          </div>
          <img src={product.images.mainImage} alt={product.description.short} />
        </div>
        <div className="group-hover:opacity-50 opacity-100 px-1 h-full flex flex-col justify-between overflow-hidden">
          <div>
            <p className="font-bold text-newgray-600 text-ellipsis whitespace-nowrap overflow-hidden">
              {product.title}
            </p>
          </div>
          <p className=" text-newgray-300 text-sm text-ellipsis overflow-hidden">
            {product.description.short}
          </p>
          <div className="flex justify-between">
            <p className="font-medium text-newgray-600">
              R$ {product.normalPrice}
            </p>
            {product.discountPercentage * 100 !== 0 && (
              <p className="font-medium text-newgray-200 line-through">
                R$ {product.salePrice}
              </p>
            )}
          </div>
        </div>
        <div className="group-hover:flex flex-col hidden text-white justify-center items-center gap-3 absolute w-[13rem]">
          <button
            className="py-2 text-sm cursor-pointer px-8 font-medium bg-white text-newgolden hover:text-white hover:bg-newgolden transition-colors"
            onClick={(e) => handleAddToCart(e, product)}
          >
            Add to cart
          </button>
          <div className="flex flex-wrap justify-center gap-3 items-center">
            <div className="flex gap-2 items-center cursor-pointer">
              <img src="../src/assets/icon/share.svg" alt="share-icon" />
              <span className="text-sm font-medium">Share</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <img src="../src/assets/icon/compare.svg" alt="compare-icon" />
              <span className="text-sm font-medium">Compare</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <img src="../src/assets/icon/like.svg" alt="like-icon" />
              <span className="text-sm font-medium">Like</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
