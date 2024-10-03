type ProductHeaderProps = {
  title: string;
};

export function ProductHeader({ title }: ProductHeaderProps) {
  return (
    <div className="md:px-20 p-4 md:p-6 bg-newwhite-600">
      <h4 className="text-[0.8rem] text-newgray-100 font-medium">
        <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
          Home <span className="font-medium text-black text-xl">{">"}</span>{" "}
          Shop <span className="font-medium text-black text-xl">{">"}</span>{" "}
          <div className="border-l-2 border-newgray-100 h-6"></div>
          <span className="font-medium text-black">{title}</span>
        </div>
      </h4>
    </div>
  );
}
