import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalBox, ModalImage } from "./Modal.styled"
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, image, isModalOpen }) => {

  useEffect(() => {
   const handleKeyDown = e => {
     if (e.code === 'Escape') {
    onClose();
    }};
    window.addEventListener('keydown', handleKeyDown);
    return () => {window.removeEventListener('keydown', handleKeyDown)} ;
  },[onClose])

 const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
 };
  return createPortal(
    <>
      {isModalOpen && (
        <Overlay onClick={handleBackdropClick}>
          <ModalBox>
            <ModalImage src={image} alt={image} />
          </ModalBox>
        </Overlay>)}
    </>, modalRoot)
  
}

Modal.propTypes = {
  onClose: PropTypes.func,
  image: PropTypes.string,
  isModalOpen: PropTypes.bool,
}