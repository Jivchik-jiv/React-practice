import React from "react";
import styles from "./ImageGallery.module.css";
import Loader from "react-loader-spinner";

const GalleryLoader = () => {
    return (
        <Loader
        type="Grid" 
        color="#00BFFF" 
        height={50} 
        width={50}
      />
    )
}

export default GalleryLoader;