export function HomeImagesSection() {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col gap-10 justify-center items-center py-14 px-1 font-poppins ">
        <div>
          <p className="text-center mt-4 md:mt-0 text-newgray-500 font-semibold">
            Share your setup with
          </p>
          <p className="text-center text-newgray-600 text-3xl font-bold">
            #FurniroFurniture
          </p>
        </div>
        <img src="./src/assets/furniture.png" alt="furniture" />
      </div>
    </div>
  );
}
