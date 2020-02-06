import React from "react";
import shortId from "shortid";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ data }) => {
  return (
    <ul className={css.ImageGallery}>
      {data.map(img => {
        const transformImg = { ...img, id: shortId() };
        return <ImageGalleryItem key={transformImg.id} {...transformImg} />;
      })}
    </ul>
  );
};

export default ImageGallery;
