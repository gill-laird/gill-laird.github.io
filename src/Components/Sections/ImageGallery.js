import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "./img/BA_1.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/BA_2.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/chair_1.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/chair_2.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/chair_3.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/chair_4.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/chair_5.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/cushions_1.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/footstool_1.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/cane_2.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/cane_3.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/rush_2.jpeg",
    originalClass: "imageGalleryClass",
  },
  {
    original: "./img/uphol.jpeg",
    originalClass: "imageGalleryClass",
  },
];

export class MyGallery extends React.Component {
  render() {
    return (
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        additionalClass="myImageGallery"
      />
    );
  }
}
