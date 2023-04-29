import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

function Backdrop(props) {
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
  return <div className={styles.backdrop} onClick={props.onHideCart} />;
}

function ModalWindow(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement,
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement,
      )}
    </>
  );
}

export default Modal;
