import React from 'react';
import './style.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const index = ({ type }) => {
  return (
    <div>
      {type == 'save' ? (
        <button type="button" class="btn btn-save">
          Save
        </button>
      ) : (
        ''
      )}
      {type == 'next' ? (
        <button type="button" class="btn btn-save">
          Next Step
        </button>
      ) : (
        ''
      )}
      {type == 'back' ? (
        <button type="button" class="btn btn-back">
          <AiOutlineArrowLeft className="icon-back" /> Back
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default index;
