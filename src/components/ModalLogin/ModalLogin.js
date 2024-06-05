import { ModalWForm } from "../ModalWForm/ModalWForm";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as auth from "../../utils/auth";
import "./ModalLogin.css";
export const Login = ({ handleCloseModal, onClick, isLoggedIn }) => {
  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setIsLoading(true);
      const token = await auth.authorize(values.email, values.password);
      if (!values.email || !values.password) {
        return;
      }
      console.log("Login successful. Token: ", token);
      isLoggedIn(true);
      const email = values.email;
      history.push(`/profile/${email}`);
    } catch (error) {
      console.error("Login failed: ", error);
    } finally {
      // finally setisloading (false)
      handleCloseModal();
    }
  };
  return (
    <ModalWForm
      name={`login`}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor={`email`}>Email :</label>
      <input
        className={`login__form-input`}
        name={`email`}
        id={`email`}
        onChange={handleChange}
        value={values.email}
        required
      />
      <label htmlFor={`password`}>Password :</label>
      <input
        className={`login__form-input`}
        name={`password`}
        id={`password`}
        onChange={handleChange}
        value={values.password}
        required
      />
      <div className={`login__form-button_container`}>
        <button className={`login__form-button`}>
          <p className={`login__form-button_text`}>Login</p>
        </button>
        <button
          className={`login__form-button`}
          onClick={() => onClick("register")}
        >
          <p className={`login__form-button_text`}>Register</p>
        </button>
      </div>
    </ModalWForm>
  );
};
