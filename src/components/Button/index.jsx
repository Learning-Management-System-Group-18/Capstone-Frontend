import React from 'react';
import './style.css';
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai';

const index = ({ type }) => {
  // let type = 'add';
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
      {type == 'add' ? (
        <button type="button" class="btn btn-add">
          <AiOutlinePlus className="icon-add" /> Create Category
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default index;
