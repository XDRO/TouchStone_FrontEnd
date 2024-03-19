import { Modal } from "../Modal/Modal";
import "./ModalAbout.css";

export const ModalAbout = ({ handleCloseModal }) => {
  return (
    <Modal onClose={handleCloseModal} name={`about`}>
      <div>
        <div></div>
      </div>
    </Modal>
  );
};
