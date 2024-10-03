import { Link } from "react-router-dom";

export function HomeDiscoverSection() {
  return (
    <div className="bg-homeTopSection h-screen flex md:justify-end items-center p-10">
      <div className="bg-newwhite-800 flex flex-col gap-3 px-12 py-8 font-poppins md:w-[40%] rounded md:items-start">
        <p className="font-medium text-xm">New Arrival</p>
        <p className="font-bold text-3xl md:text-4xl text-newgolden">
          Discover Our New Collection
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Link
          to="/shop"
          className="bg-newgolden text-white uppercase py-4 px-10 mt-5 hover:opacity-85 transition-all"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
