import { ModalStyle, Overlay } from "./Modal.styled";
import { createPortal } from "react-dom";
import { Component } from 'react'

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount = () => {
        window.addEventListener('keydown', this.onEscapeCloseModal);
    }

    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.onEscapeCloseModal);
    }
    
    onEscapeCloseModal = (event) => {
        if (event.code === 'Escape') {
            this.props.onClose()
        }
    }

    onClickOverlay = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onClose()
        };
    }

    render() {
        const { selectedPhoto: {largeImageURL, tags} } = this.props;

        return createPortal(
            <Overlay onClick={this.onClickOverlay}>
                <ModalStyle>
                    <img src={largeImageURL} alt={tags} />
                </ModalStyle>
            </Overlay>,
            modalRoot);
    }
};

