import { ModalWForm } from "../ModalWForm/ModalWForm";
// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// need to import authentication here
import "./ModalLogin.css";
export const Login = ({ handleCloseModal, onClick }) => {
  return (
    // title={`Login`} removed from <ModalWForm/>
    <ModalWForm name={`login`} onClose={handleCloseModal}>
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
