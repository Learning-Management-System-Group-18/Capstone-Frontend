import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from '..';
import './style.css';
import { deletepopupIcon } from '../../assets';
import { GrClose } from 'react-icons/gr';

const Index = ({ handleClose, show }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="px-4">
          <GrClose className="icon-closedelete" onClick={handleClose} />
          <div className="wrapContentDeletePopup">
            <img
              src={deletepopupIcon}
              alt="popupdelete"
              className="icon-popupdelete"
            />
            <div className="subtitle_2 secondary_2">
              Are you sure will delete this courses ?
              <div className="content-popupDelete">
                Delete this course will remove all content including:
                <ul>
                  <li>Video</li>
                  <li>Document</li>
                  <li>Quiz</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="warpbtn-popupdelete">
            <Button type={'btn-popupcancel'} onClick={handleClose} />
            <Button type={'btn-popupdelete'} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Index;
