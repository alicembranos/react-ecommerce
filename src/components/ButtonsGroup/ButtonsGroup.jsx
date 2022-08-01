import { useCallback, useContext, useState } from "react";
import { useLocation } from "wouter";
import UserContext from "context/UserContext";
import CustomButton from "components/CustomButton/CustomButton";
import Modal from "components/Modal/Modal";
import "./ButtonsGroup.css";
import ModalPortal from "components/Modal/Modal";
import PurchaseForm from "components/PurchaseForm/PurchaseForm";

const ButtonsGroup = () => {
  const [, setLocation] = useLocation();
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const navigateToShop = useCallback(() => {
    setLocation("/shop");
  }, [setLocation]);

  const navigateToBuyProcess = useCallback(() => {
    if (!Boolean(user)) {
      setLocation("/login");
    }
    // setLocation("/chekcout");
    setShowModal(true);
    console.log("checkout");
  }, [setLocation, user]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="buttons__container">
        <CustomButton
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
