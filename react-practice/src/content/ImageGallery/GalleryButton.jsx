import React from "react";
import styles from "./ImageGallery.module.css";


const GalleryButton = ({ onDownloadMore}) => {

    return (
           <button type = 'button' className = {styles.btn} onClick = {onDownloadMore}>Download more</button>
    )
}

export default GalleryButton;