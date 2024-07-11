import "./ModalLogout.css";
import { Modal } from "../Modal/Modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const ModalLogout = ({ isLoggedIn, handleCloseModal }) => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    isLoggedIn(false);
    handleCloseModal("");
    history.push("/");
  };

  return (
    <Modal onClose={handleCloseModal} name={`logout`}>
      <h3 className="modal__title_logout">Are you sure you want to logout?</h3>
      <div className="modal__options_logout">
        <button className="modal__button_cancel" onClick={handleCloseModal}>
          Cancel
        </button>
        <button className="modal__button_logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </Modal>
  );
};
