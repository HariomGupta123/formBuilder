const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
