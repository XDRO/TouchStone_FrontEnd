import "./Modal.css";
export const Modal = ({ name, onClose, children }) => {
  return (
    <div className={`modal modal__overlay`}>
      <div className={`modal modal__type_${name}`}>
        {/* <button
          className={`modal__close-button modal__close-button${name}`}
          type="button"
        ></button> */}
      </div>
    </div>
  );
};
