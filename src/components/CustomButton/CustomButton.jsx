import "./CustomButton.css";

const CustomButton = (props) => {
  const { value, href, onClick, className } = props;
  return (
    <div className="btn__div" title={href}>
      <button
        className={`btn ${className}`}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};

export default CustomButton;
