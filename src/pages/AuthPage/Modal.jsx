import React from 'react';
import ReactDom from 'react-dom';



export default function Modal({open, onClose}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-styles" />
      <div className="modal-styles">
        <button onClick={onClose}>Close modal</button>
        
      </div>
    </>,
    document.getElementById('portal')
  )
}