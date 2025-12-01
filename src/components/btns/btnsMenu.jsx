const Btn = ({ children, onClick, variant = "primary" }) => {
  const baseEstilos =
    "py-3 px-5 rounded-full text-sm transition duration-150 ease-in-out font-semibold cursor-pointer";

  let variantesEstilos = "";

  switch (variant) {
    case "accent":
      variantesEstilos =
        "bg-green-500 hover:bg-green-400 text-black shadow-lg shadow-green-700/50";
      break;
    case "normal":
      variantesEstilos =
        "border-gray-500 border text-gray-200 hover:bg-gray-800";
      break;
    case "secundario":
      variantesEstilos =
        "bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-400";
      break;
    case "peligro":
      variantesEstilos = "bg-red-600 hover:bg-red-800 text-white";
      break;
    default:
      variantesEstilos = "bg-blue-500 hover:bg-blue-700 text-white";
  }

  return (
    <button className={`${baseEstilos} ${variantesEstilos}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
