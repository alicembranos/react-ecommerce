import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "context/UserContext";
import CustomButton from "components/CustomButton/CustomButton";
import "./ButtonsGroup.css";
import ModalPortal from "components/Modal/Modal";
import PurchaseForm from "components/PurchaseForm/PurchaseForm";
import GlobalContext from "context/GlobalContext";

const ButtonsGroup = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { cartItems } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);

  const navigateToShop = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const navigateToBuyProcess = useCallback(() => {
    if (!Boolean(user)) {
      navigate("/login");
    }
    setShowModal(true);
  }, [navigate, user]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="buttons__container">
        <CustomButton
          disable={cartItems.length > 0 ? false : true}
          value="Check out"
          onClick={navigateToBuyProcess}
          className="btn-dark"
        ></CustomButton>
        <CustomButton
          value="Return to shop"
          onClick={navigateToShop}
          className="btn-light"
        ></CustomButton>
      </div>
      {showModal && (
        <ModalPortal onClose={handleCloseModal}>
          <PurchaseForm />
        </ModalPortal>
      )}
    </>
  );
};

export default ButtonsGroup;
