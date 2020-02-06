import React from "react";
import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={css.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
