import React from "react";
import css from "./Button.module.css";

const Button = ({ onClickLoadMore }) => {
  return (
    <button onClick={onClickLoadMore} className={css.Button}>
      Load more
    </button>
  );
};

export default Button;
