import "./Modal.css";
import { useState } from "react";
export const Modal = ({ name, onClose, children }) => {
  const [activeModal, setActiveModal] = useState("");

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
    console.log(modalType);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    // { activeModal =   && (
    <div className={`modal modal__overlay`}>
      <div className={`modal modal__type_${name}`}>
        <div className={`modal__content modal__content_${name}`}>
          <button
            className={`modal__close-button modal__close-button_${name}`}
            type="button"
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </div>
    // )}
  );
};
