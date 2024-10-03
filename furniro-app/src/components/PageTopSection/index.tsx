type PageTopSectionProps = {
  pageTitle: string;
};

export function PageTopSection({ pageTitle }: PageTopSectionProps) {
  return (
    <div className="flex items-center justify-center p-14 bg-pageTopSection">
      <ul className="flex flex-col items-center gap-2 font-poppins font-medium">
        <li>
          <img
            src="./src/assets/furniro-logo.png"
            alt="furniro-logo"
            className="w-8"
          />
        </li>
        <li>
          <h1 className="text-3xl">{pageTitle}</h1>
        </li>
        <li>
          <h4 className="text-[0.8rem] font-semibold">
            Home {">"} <span className="font-normal">{pageTitle}</span>
          </h4>
        </li>
      </ul>
    </div>
  );
}
