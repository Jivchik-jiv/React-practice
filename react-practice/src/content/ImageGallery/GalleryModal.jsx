import React from "react";
import styles from "./ImageGallery.module.css";


class GalleryModal extends React.Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if(e.code==='Escape') {
            this.props.closeModal();
        }
    }

    handleOverlayClick = (e) => {
       if(e.target === e.currentTarget) {
        this.props.closeModal();
       }
    }

    render () {
        return (
            <div className = {styles.overlay} onClick = {this.handleOverlayClick}>
                <div className = {styles.modal}>
                    <img src= {this.props.url} alt="img"/>
                </div>
            </div>
        )
    }

    
}

export default GalleryModal;