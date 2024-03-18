import { ModalWForm } from "../ModalWForm/ModalWForm";
import "./ModalRegister.css";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// pass in arguments for events in register = ()
export const Register = ({ handleCloseModal, onClick }) => {
  return (
    <ModalWForm
      title={`Acquire your new assistant today!`}
      name={`register`}
      buttonText={`Join Now`}
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
      <button onClick={() => onClick("login")}>Or Login</button>
    </ModalWForm>
  );
};
