import React from 'react';
import { createPortal } from 'react-dom';
import history from '../history';

const Modal = () => {
  return createPortal(
      <div onClick={() => history.push('/')} className='ui dimmer modals visible active' >
          <div onClick={(e) => e.stopPropagation()} className='ui standard modal visible active'>
              <div className='header'>Delete Stream</div>
              <div className='content'>
                  <p>Are sure you want to delete this stream?</p>
              </div>
              <div className='actions'>
                  <div className='ui button black'>Delete</div>
                  <div className='ui cancel button'>Cancel</div>
              </div>
          </div>
      </div>
      , document.querySelector('#modal'));
}

export default Modal;