type SizeButtonProps = {
  index: number;
  size: string;
};

export function SizeButton({ index, size }: SizeButtonProps) {
  return (
    <button
      className={`${
        index == 0 ? "bg-newgolden" : "bg-newwhite-600"
      } flex items-center justify-center size-8 rounded-lg cursor-pointer hover:bg-newgolden transition-all group `}
    >
      <span
        className={`group-hover:text-white text-black text-sm ${
          index == 0 && "text-white"
        }`}
      >
        {size}
      </span>
    </button>
  );
}
