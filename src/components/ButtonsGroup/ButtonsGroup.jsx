import CustomButton from "components/CustomButton/CustomButton";
import "./ButtonsGroup.css";

const ButtonsGroup = () => {
  return (
    <div className="buttons__container">
      <CustomButton value={"Return to shop"}></CustomButton>
      <CustomButton value={"Check out"}></CustomButton>
    </div>
  );
};

export default ButtonsGroup;
