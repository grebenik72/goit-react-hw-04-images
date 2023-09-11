import { ModalStyle, Overlay } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ selectedPhoto: { largeImageURL, tags }, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscapeCloseModal);
    return () => {
      window.removeEventListener('keydown', onEscapeCloseModal);
    };
  }, [onEscapeCloseModal]);
    
  /* eslint-disable */
  function onEscapeCloseModal(event) {
    if (event.code === 'Escape') {
      onClose();
      };
    };
    /* eslint-enable */
    
  const onClickOverlay = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onClickOverlay}>
      <ModalStyle>
        <img src={largeImageURL} alt={tags} />
      </ModalStyle>
    </Overlay>,
    modalRoot
  );
};