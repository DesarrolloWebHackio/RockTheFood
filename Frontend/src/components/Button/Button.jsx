import "./Button.css";

const Button = ({ children, width }) => {
  return (
    <button className="main_button" style={{ width: width }}>
      {children}
    </button>
  );
};

export default Button;
