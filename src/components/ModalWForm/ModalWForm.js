import { Modal } from "../Modal/Modal";
import "./ModalWForm.css";
import "../Modal/Modal.css";
export const ModalWForm = ({
  name,
  title,
  buttonText,
  children,
  onClose,
  onSubmit,
  activeModal,
  showForm = true,
  state = { disabled: true },
}) => {
  return (
    <Modal name={name} onClose={onClose} activeModal={activeModal}>
      <div className={`modal modal__type_${name}`}>
        <div className={`modal__content modal__content_${name}`}>
          <button
            className={`modal__close-button modal__close-button_${name}`}
            type="button"
            onClick={onClose}
          />
          {/* <h3 className={`modal__title modal__title_${name}`}>{title}</h3> */}
          {showForm && (
            <form
              className={`modal__form modal__form_${name}`}
              onSubmit={onSubmit}
            >
              {children}
              <button
                className={`modal__button modal__button_${name}`}
                // disabled={state}
                type="submit"
              >
                {buttonText}
              </button>
            </form>
          )}
          {!showForm && children}
        </div>
      </div>
    </Modal>
  );
};
