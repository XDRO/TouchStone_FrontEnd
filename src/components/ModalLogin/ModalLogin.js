import { ModalWForm } from "../ModalWForm/ModalWForm";
// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// need to import authentication here
import "./ModalLogin.css";
export const Login = ({ handleCloseModal, onClick }) => {
  return (
    // title={`Login`} removed from <ModalWForm/>
    <ModalWForm name={`login`} buttonText={`Login`} onClose={handleCloseModal}>
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
      <button
        className={`login__form-register`}
        onClick={() => onClick("register")}
      >
        Or register
      </button>
    </ModalWForm>
  );
};
