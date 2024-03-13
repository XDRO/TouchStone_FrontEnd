import { ModalWForm } from "../ModalWForm/ModalWForm";
import "./ModalRegister.css";

// pass in arguments for events in register = ()
export const Register = () => {
  return (
    <ModalWForm name={`register`} buttonText={`Join Now`}>
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
      <div className={`register__login`}>
        {/* create <Link></Link> to login modal */}
      </div>
    </ModalWForm>
  );
};
