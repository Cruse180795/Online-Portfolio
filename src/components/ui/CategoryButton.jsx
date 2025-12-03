const CategoryButton = ({ label, isActive, onClick }) => {
  return (
    <button
      aria-pressed={isActive}
      onClick={onClick}
      className={`px-4 py-2 border-2 bg-white/10 backdrop-blur-md rounded-lg font-roboto-mono font-semibold text-sm shadow-lg shadow-white-grey/10 tracking-wide cursor-pointer transition ${isActive ? "border-primary-300 bg-primary-500/20 text-primary-100" : "border-white/20 hover:bg-white/20"}`}
    >
      {label}
    </button>
  );
};

export default CategoryButton;
