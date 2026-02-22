export default function NewsTicker() {
  return (
    <div
      className="flex items-center w-full"
      style={{ backgroundColor: "#e2dccc", color: "#192d45", maxWidth: "100%" }}
    >
      <h4
        className="p-2 mb-0 font-semibold shrink-0"
        style={{ whiteSpace: "nowrap" }}
      >
        Latest News:
      </h4>
      <div className="overflow-hidden flex-1">
        <p
          className="m-0 p-2 whitespace-nowrap"
          style={{
            display: "inline-block",
            animation: "marquee-scroll 18s linear infinite",
            color: "#192d45",
          }}
        >
          A new formal CBSE school is coming soon, and admissions will open for
          the academic year 2026–27, from Playgroup to Grade 12. For more
          details, please contact us at +91-9996648317
        </p>
      </div>
    </div>
  );
}
