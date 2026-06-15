export default function SectionHeader({ label }) {
  return (
    <div className="mb-10">
      <p className="text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.18em] text-cyan-300 font-extrabold">
        {label}
      </p>
    </div>
  );
}
