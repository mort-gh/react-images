import React from "react";
import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, id, openModal }) => {
  return (
    <li className={css.ImageGalleryItem} onClick={openModal}>
      <img
        src={webformatURL}
        alt=""
        id={id}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
