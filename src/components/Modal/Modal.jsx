import ReactDOM from "react-dom";
import CustomButton from "components/CustomButton/CustomButton";
import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <CustomButton className="btn-light" onClick={onClose}>
          ❌
        </CustomButton>
        {children}
      </div>
    </div>
  );
};

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById('modal-root'));
}
