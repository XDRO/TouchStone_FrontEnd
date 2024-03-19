import { Modal } from "../Modal/Modal";
import "./ModalContact.css";

export const ModalContact = ({ handleCloseModal }) => {
  return (
    <Modal onClose={handleCloseModal} name={`contact`}>
      <div className={`modal__contact-container`}>
        <h3 className={`modal__contact-title`}>Contact Us</h3>
        <div className={`modal__contact-number`}>(555) 555-5555</div>
      </div>
    </Modal>
  );
};
