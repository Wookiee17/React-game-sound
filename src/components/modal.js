import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';
import appConfig from "../config";
const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment 
  >
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
        <iframe width={appConfig.opts.width} height={appConfig.opts.height} 
        src={appConfig.videoUrl+appConfig.mute}>
      </iframe>
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;