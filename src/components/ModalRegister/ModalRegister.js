import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ModalWForm } from "../ModalWForm/ModalWForm";
import * as auth from "../../utils/auth";
import React, { useState } from "react";
import "./ModalRegister.css";
// it'd be nice to have a 409 conflict error handler
export const Register = ({
  handleCloseModal,
  onClick,
  setCurrentUser,
  isLoggedIn,
}) => {
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleSubmit = async (e) => {
    // create loading state
    e.preventDefault();
    console.log("Values before registration:", values);
    try {
      const userData = auth.register(values);
      setCurrentUser(userData.newUser);
      isLoggedIn(true);
      const email = values.email;
      history.push(`/profile/${email}`);
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      handleCloseModal();
    }
  };
  // {/* send an email to user to verify user email */}

  return (
    <ModalWForm
      title={`Acquire your new assistant today!`}
      name={`register`}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor={`name`}>Name :</label>
      <input
        onChange={handleChange}
        className={`register__form-input`}
        name={`name`}
        id={`name`}
        required
      />
      <label htmlFor={`email`}>Email :</label>
      <input
        onChange={handleChange}
        className={`register__form-input`}
        name={`email`}
        id={`email`}
        required
      />
      <label htmlFor={`password`}>Password :</label>
      <input
        onChange={handleChange}
        className={`register__form-input`}
        name={`password`}
        id={`password`}
        required
      />

      <label htmlFor={`confirm_password`}>Confirm Password :</label>
      <input
        onChange={handleChange}
        className={`register__form-input`}
        name={`confirm_password`}
        id={`confirm_password`}
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
