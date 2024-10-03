import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "./HomeSliderSection.css";

export function HomeSliderSection() {
  return (
    <div className="flex flex-col gap-10 p-10 md:gap-0 md:px-32 md:py-10 items-center justify-center md:justify-around font-poppins bg-newwhite-500 md:flex-row">
      <div className="flex flex-wrap flex-col items-center md:w-[35%] gap-3 md:items-start">
        <p className="text-center md:text-start text-newgray-600 text-3xl font-bold">
          50+ Beautiful rooms inspiration
        </p>
        <p className="text-center md:text-start font-medium mt-4 md:mt-0 text-newgray-400">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <Link
          to="/shop"
          className="bg-newgolden font-medium text-white py-4 px-10 mt-5 hover:opacity-85 transition-all"
        >
          Explore More
        </Link>
      </div>
      <div className="md:w-[30%] ">
        <Splide
          hasTrack={false}
          options={{
            rewind: true,
            perPage: 1,
            rewindSpeed: 1000,
            drag: false,
            width: "100%",
            height: "25rem",
            breakpoints: {
              766: {
                width: "15rem",
                height: "20rem",
              },
              320: {
                width: "100%",
                height: "20rem",
              },
            },
          }}
        >
          <SplideTrack>
            <SplideSlide>
              <div className="h-full">
                <div className="bg-white/70 p-4 rounded absolute bottom-2 left-2">
                  <div className="flex flex-col items-center font-poppins">
                    <p className="text-newgray-400 text-sm">01 - Bed Room</p>
                    <p className="font-semibold text-lg text-newgray-600">
                      Inner Peace
                    </p>
                    <Link to={"/shop"}>
                      <button className="p-1 bg-newgolden rounded mt-1 hover:bg-opacity-85 transition-all">
                        <GoArrowRight color="white" fontSize={"1.5rem"} />
                      </button>
                    </Link>
                  </div>
                </div>
                <img
                  src="./src/assets/slider/slider-1.png"
                  alt="Image 1"
                  className="h-full w-full object-cover"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="h-full">
                <div className="bg-white/70 py-4 px-3 rounded absolute bottom-2 left-2">
                  <div className="flex flex-col items-center font-poppins">
                    <p className="text-newgray-400 text-sm">02 - Kitchen</p>
                    <p className="font-semibold text-lg text-newgray-600">
                      Food Heaven
                    </p>
                    <Link to={"/shop"}>
                      <button className="p-1 bg-newgolden rounded mt-1 hover:bg-opacity-85 transition-all">
                        <GoArrowRight color="white" fontSize={"1.5rem"} />
                      </button>
                    </Link>
                  </div>
                </div>
                <img
                  src="./src/assets/slider/slider-2.png"
                  alt="Image 2"
                  className="h-full w-full object-cover"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="h-full">
                <div className="bg-white/80 py-4 px-3 rounded absolute bottom-2 left-2">
                  <div className="flex flex-col items-center font-poppins">
                    <p className="text-newgray-400 text-sm">03 - Living Room</p>
                    <p className="font-semibold text-lg text-newgray-600">
                      Cozy Retreat
                    </p>
                    <Link to={"/shop"}>
                      <button className="p-1 bg-newgolden rounded mt-1 hover:bg-opacity-85 transition-all">
                        <GoArrowRight color="white" fontSize={"1.5rem"} />
                      </button>
                    </Link>
                  </div>
                </div>
                <img
                  src="./src/assets/slider/slider-3.png"
                  alt="Image 3"
                  className="h-full w-full object-cover"
                />
              </div>
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows">
            <button
              className="splide__arrow splide__arrow--prev"
              style={{
                backgroundColor: "white",
                color: "#b88e2f",
                opacity: "100",
              }}
            >
              <span className="text-3xl ">{"<"}</span>
            </button>
            <button
              className="splide__arrow splide__arrow--next"
              style={{
                backgroundColor: "white",
                color: "#b88e2f",
                opacity: "100",
              }}
            >
              <span className="text-3xl ">{">"}</span>
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
}
