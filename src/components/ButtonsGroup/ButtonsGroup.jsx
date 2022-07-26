import { useCallback, useContext } from "react";
import { useLocation } from "wouter";
import UserContext from "context/UserContext";
import CustomButton from "components/CustomButton/CustomButton";
import "./ButtonsGroup.css";

const ButtonsGroup = () => {
  const [, setLocation] = useLocation();
  const { user } = useContext(UserContext);

  const navigateToShop = useCallback(() => {
    setLocation("/shop");
  }, [setLocation]);

  const navigateToLogin = useCallback(() => {
    if (!Boolean(user)) {
      setLocation("/login");
    }
    // setLocation("/chekcout");
    console.log("checkout");
  }, [setLocation, user]);

  return (
    <div className="buttons__container">
      <CustomButton
        value="Check out"
        onClick={navigateToLogin}
        className="btn-dark"
      ></CustomButton>
      <CustomButton
        value="Return to shop"
        onClick={navigateToShop}
        className="btn-light"
      ></CustomButton>
    </div>
  );
};

export default ButtonsGroup;
