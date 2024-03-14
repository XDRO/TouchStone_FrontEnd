import "./ModalDeleteItem.css";
import { Modal } from "../Modal/Modal";
export const ModalDeleteItem = () => {
  return (
    <Modal name={`delete`} buttonText={`Delete`}>
      {/* possibly just add <h3></h3> to modal.js */}
      {/* based on the chat they would like to
       delete I would like to change this {`chat`} text */}
      <h3 className="modal__title_delete">Delete {`Chat`}?</h3>
      <div className="modal__options_delete">
        <button className="modal__button_cancel">Cancel</button>
        <button className="modal__button_delete">Delete</button>
      </div>
    </Modal>
  );
};
