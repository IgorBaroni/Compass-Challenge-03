import { BiSolidStar } from "react-icons/bi";
import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";

type ProductRatingStarsProps = {
  rating: number;
};

export function ProductRatingStars({ rating }: ProductRatingStarsProps) {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1;

  return (
    <div className="flex gap-1 items-center">
      {/* Render full stars */}
      {Array.from({ length: fullStars }, (_, index) => (
        <BiSolidStar
          key={index}
          color="gold"
          size={"1.5rem"}
          data-testid="solidStar"
        />
      ))}

      {/* Render half stars if there are */}
      {halfStars > 0 && <FaStarHalfAlt color="gold" size={"1.3rem"} />}

      {/* Render empty stars */}
      {Array.from(
        { length: 5 - fullStars - (halfStars > 0 ? 1 : 0) },
        (_, index) => (
          <FaRegStar key={index} color="gold" size={"1.4rem"} />
        )
      )}
    </div>
  );
}
