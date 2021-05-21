import React from 'react';
import {createPortal} from 'react-dom'
import IconButton from '../IconButton/IconButton';
import styles from './Modal.module.css'
import {ReactComponent as CloseButton} from './../../../Icons/delete.svg'

const modalRoot = document.querySelector('#modal-root');


class Modal extends React.Component {

    componentDidMount () {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) =>{
        if(e.code === 'Escape'){
            this.props.closeModal(e)
        }
    }

    handleBackDropClick = (e) => {
       
        if(e.target === e.currentTarget) {
            this.props.closeModal(e)
        }
    }


    render () {
        return createPortal(
            <div className= {styles.backdrop} onClick = {this.handleBackDropClick}>
                <div className = {styles.modal}>
                    <div className = {styles.content}> {this.props.children}</div>
                    <div className = {styles.closeBtnWrap}>
                   
                    <IconButton aria-label = 'Close modal'>
                        <CloseButton width="40" stroke = "red" onClick = {this.props.closeModal}/>
                    </IconButton>
                    </div>
                    
                    </div>
                
            </div>,
            modalRoot,
        )
    }
}

export default Modal;