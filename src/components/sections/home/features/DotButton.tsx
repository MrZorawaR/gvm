export default function DotButton({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full transition-all duration-300 border-none cursor-pointer ${
        selected
          ? "w-8 h-2.5 bg-accent-text"
          : "w-2.5 h-2.5 bg-accent-text/30 hover:bg-accent-text/50"
      }`}
    />
  );
}
