import { Modal } from "../Modal/Modal";
import "./ModalWForm.css";
import "../Modal/Modal.css";
export const ModalWForm = ({
  name,
  title,
  buttonText,
  formOptions,
  children,
  onClose,
  onSubmit,
  activeModal,
  state = { disabled: true },
}) => {
  return (
    <Modal name={name} onClose={onClose} activeModal={activeModal}>
      <h3 className={`modal__title modal__title_${name}`}>{title}</h3>
      <form className={`modal__form modal__form_${name}`} onSubmit={onSubmit}>
        {children}
        <button
          className={`modal__button modal__button_${name}`}
          // disabled={state}
          type="submit"
        >
          {buttonText}
        </button>
        <button className={`modal__button modal__button_${name}`}>
          {formOptions}
        </button>
      </form>
    </Modal>
  );
};
