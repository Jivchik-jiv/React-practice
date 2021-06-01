import React from "react";
import GalleryModal from "./GalleryModal";
import styles from "./ImageGallery.module.css";

class ImageGalleryItem extends React.Component {
    state= {
        showModal: false,
    }

    handleToggleModal = ()=> {
        this.setState(prevState=>({
            showModal: !prevState.showModal
        }))
    }
    render () {

        const { webformatURL, largeImageURL } = this.props;
        return (
            <li className={styles.item}  >
                <img src={webformatURL} alt="" className = {styles.img} onClick ={this.handleToggleModal}/>
                {this.state.showModal
                &&<GalleryModal url = {largeImageURL} closeModal = {this.handleToggleModal}/>}
            </li>
        )
    }
}

export default ImageGalleryItem;
