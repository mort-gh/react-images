import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";
import shortId from "shortid";

const ImageGallery = ({ data, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {data.map(img => {
        const transformImg = { ...img, id: img.id };
        return (
          <ImageGalleryItem
            openModal={openModal}
            key={shortId()}
            {...transformImg}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
