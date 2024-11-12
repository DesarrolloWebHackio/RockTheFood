import "./Button.css";

const Button = ({ children, width, type = "submit", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="main_button"
      style={{ width: width }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
