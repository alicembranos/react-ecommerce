import "./CustomButton.css";

const CustomButton = (props) => {
  const { value, href, onClick, className, disable } = props;

  return (
    <div className="btn__div" title={href}>
      <button
        className={`btn ${className}`}
        onClick={onClick}
        disabled={disable}
      >
        {value}
      </button>
    </div>
  );
};

export default CustomButton;
