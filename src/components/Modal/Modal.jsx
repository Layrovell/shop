import React from 'react';
import './Modal.scss';

export const Modal = ({setModalActive, children}) => {
  return (
    <div
      className="modalw"
      onClick={() => {
        setModalActive(false);
      }}
    >
      <div className="modal__content">
        {children}
        <div className="has-text-centered mt-2">
          <button
            onClick={() => {
              setModalActive(false);
            }}
            type="button"
            className="is-danger button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
