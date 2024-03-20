import { ModalWForm } from "../ModalWForm/ModalWForm";
import "./ModalRegister.css";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// pass in arguments for events in register = ()
export const Register = ({ handleCloseModal, onClick }) => {
  return (
    <ModalWForm
      title={`Acquire your new assistant today!`}
      name={`register`}
      onClose={handleCloseModal}
    >
      <label htmlFor={`name`}>Name :</label>
      <input
        className={`register__form-input`}
        name={`name`}
        id={`name`}
        required
      />
      {/* send an email to user to verify user email */}
      <label htmlFor={`email`}>Email :</label>
      <input
        className={`register__form-input`}
        name={`email`}
        id={`email`}
        required
      />
      <label htmlFor={`password`}>Password :</label>
      <input
        className={`register__form-input`}
        name={`password`}
        id={`password`}
        required
      />

      <label htmlFor={`confirm password`}>Confirm Password :</label>
      <input
        className={`register__form-input`}
        name={`confirm password`}
        id={`confirm password`}
        required
      />
      <div className={`register__form-button_container`}>
        <button className={`register__form-button`}>
          <p className={`register__form-button_text`}>Join Now</p>
        </button>
        <button
          className={`register__form-button`}
          onClick={() => onClick("login")}
        >
          <p className={`register__form-button_text`}>Login</p>
        </button>
      </div>
    </ModalWForm>
  );
};
