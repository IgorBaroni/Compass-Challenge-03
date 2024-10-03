export function HomeCategoriesSection() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center p-10 font-poppins ">
      <div>
        <p className="text-center text-newgray-700 text-3xl font-bold">
          Browse The Range
        </p>
        <p className="text-center mt-4 md:mt-0 text-newgray-500 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <img
              src="./src/assets/dining-category.png"
              alt="dining-category image"
              className="cursor-pointer rounded-md h-[15rem] md:h-[20rem]"
            />
            <p className="text-center mt-4 font-semibold text-lg text-newgray-700">
              Dining
            </p>
          </li>
          <li>
            <img
              src="./src/assets/living-category.png"
              alt="living-category image"
              className="cursor-pointer rounded-md h-[15rem] md:h-[20rem]"
            />
            <p className="text-center mt-4 font-semibold text-lg text-newgray-700">
              Living
            </p>
          </li>
          <li>
            <img
              src="./src/assets/bedroom-category.png"
              alt="bedroom-category image"
              className="cursor-pointer rounded-md h-[15rem] md:h-[20rem]"
            />
            <p className="text-center mt-4 font-semibold text-lg text-newgray-700">
              Bedroom
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
