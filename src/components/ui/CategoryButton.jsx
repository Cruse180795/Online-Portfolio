const CategoryButton = ({ label, isActive, onClick }) => {
  return (
    <button
      aria-pressed={isActive}
      onClick={onClick}
      className={`px-4 py-2 border-2 corner-squircle rounded-4xl font-roboto-mono font-semibold text-sm shadow-lg shadow-white-grey/10 tracking-wide cursor-pointer transition ${isActive ? "border-primary-300 bg-primary-500/30 text-primary-100" : "border-white/20 bg-white/10 hover:bg-white/20"}`}
    >
      {label}
    </button>
  );
};

export default CategoryButton;
