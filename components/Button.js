export default function Button({ label }) {
  return (
    <button
      type="button"
      className="text-ct-blue border border-ct-blue hover:border-ct-blue hover:opacity-80 rounded text-xs px-4 py-0.5  min-w-[5rem] text-center"
    >
      {label}
    </button>
  );
}
