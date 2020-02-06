import React from "react";
import css from "./Modal.module.css";

const Modal = ({ img, closeModal }) => {
  return (
    <div className={css.Overlay} id="overlay" onClick={closeModal}>
      <div className={css.Modal}>
        <img alt="" src={img} />
      </div>
    </div>
  );
};

export default Modal;
