import React from 'react';
import './style.css';
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai';
import { RiPencilFill } from 'react-icons/ri';
import { FaTrash } from 'react-icons/fa';

const index = ({ type }) => {
  return (
    <div>
      {type == 'btn-save' ? (
        <button type="button" class="btn btn-save">
          Save
        </button>
      ) : (
        ''
      )}
      {type == 'btn-next' ? (
        <button type="button" class="btn btn-save">
          Next Step
        </button>
      ) : (
        ''
      )}
      {type == 'btn-back' ? (
        <button type="button" class="btn btn-back">
          <AiOutlineArrowLeft className="icon-back" /> Back
        </button>
      ) : (
        ''
      )}
      {type == 'btn-add' ? (
        <button type="button" class="btn btn-add">
          <AiOutlinePlus className="icon-add" /> Create Category
        </button>
      ) : (
        ''
      )}
      {type == 'btn-popupsave' ? (
        <button type="button" class="btn btn-popupsave">
          Save
        </button>
      ) : (
        ''
      )}
      {type == 'btn-popupcancel' ? (
        <button type="button" class="btn btn-popupcancel">
          Cancel
        </button>
      ) : (
        ''
      )}
      {type == 'btn-edit' ? (
        <button type="button" class="btn btn-edit">
          <RiPencilFill className="icon-edit" /> Edit
        </button>
      ) : (
        ''
      )}
      {type == 'btn-delete' ? (
        <button type="button" class="btn btn-delete">
          <FaTrash className="icon-delete" /> Delete
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default index;
