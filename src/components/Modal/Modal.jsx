import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalBox, ModalImage } from "./Modal.styled"
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

handleKeyDown = e => {
    if (e.code === 'Escape') {
    this.props.onClose();
    }
  };
 handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
 };
render() {
    return createPortal(
         <>
            {this.props.isModalOpen && (
            <Overlay onClick={this.handleBackdropClick}>
             <ModalBox>
                <ModalImage src={this.props.image} alt={this.props.image} />
             </ModalBox>
            </Overlay>)}
        </>, modalRoot)
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  image: PropTypes.string,
  isModalOpen: PropTypes.bool,
}