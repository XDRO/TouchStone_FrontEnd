import { ModalWForm } from "../ModalWForm/ModalWForm";
// import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as auth from "../../utils/auth";
import "./ModalLogin.css";
export const Login = ({ handleCloseModal, onClick, isLoggedIn }) => {
  const history = useHistory();

  const [values, setValues] = {
    email: "",
    password: "",
  };

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
      history.push("/profile");
    } catch (error) {
      console.error("Login failed: ", error);
      history.push("/register");
    }
    // finally setisloading (false)
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
        required
      />
      <label htmlFor={`password`}>Password :</label>
      <input
        className={`login__form-input`}
        name={`password`}
        id={`password`}
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
