import React from "react";
import "./style.css";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = ({ type, onClick, disabled }) => {
  return (
    <div>
      {type == "btn-save" ? (
        <button type="button" className="btn btn-save" onClick={onClick}>
          Save
        </button>
      ) : (
        ""
      )}
      {type == "btn-next" ? (
        <button type="button" className="btn btn-save">
          Next Step
        </button>
      ) : (
        ""
      )}
      {type == "btn-back" ? (
        <button type="button" className="btn btn-back" onClick={onClick}>
          <AiOutlineArrowLeft className="icon-back" /> Back
        </button>
      ) : (
        ""
      )}
      {type == "btn-add" ? (
        <>
          <button type="button" className="btn btn-add" onClick={onClick}>
            <AiOutlinePlus className="icon-add" /> Create Category
          </button>
        </>
      ) : (
        ""
      )}
      {type == "btn-add-course" ? (
        <>
          <button type="button" className="btn btn-add" onClick={onClick}>
            <AiOutlinePlus className="icon-add" /> Create Course
          </button>
        </>
      ) : (
        ""
      )}
      {type == "btn-popupsave" ? (
        <button type="submit" className="btn btn-popupsave">
          Save
        </button>
      ) : (
        ""
      )}
      {type == "btn-login" ? (
        <button type="submit" className="btn btn-login" onClick={onClick}>
          Login
        </button>
      ) : (
        ""
      )}
      {type == "btn-jointelegram" ? (
        <button
          type="submit"
          onClick={onclick}
          className="btn btn-jointelegram"
        >
          Join Telegram
        </button>
      ) : (
        ""
      )}
      {type == "btn-seedetail" ? (
        <button type="submit" onClick={onClick} className="btn btn-seedetail">
          See Detail
        </button>
      ) : (
        ""
      )}
      {type == "btn-popupcancel" ? (
        <button type="button" className="btn btn-popupcancel" onClick={onClick}>
          Cancel
        </button>
      ) : (
        ""
      )}
      {type == "btn-edit" ? (
        <button type="button" className="btn btn-edit" onClick={onClick}>
          <RiPencilFill className="icon-edit" /> Edit
        </button>
      ) : (
        ""
      )}
      {type == "btn-delete" ? (
        <button type="button" className="btn btn-delete" onClick={onClick}>
          <FaTrash className="icon-delete" /> Delete
        </button>
      ) : (
        ""
      )}
      {type == "btn-popupdelete" ? (
        <button type="button" className="btn btn-popupdelete" onClick={onClick}>
          Delete
        </button>
      ) : (
        ""
      )}
      {type == "btn-savechange-profile" ? (
        <button
          type="submit"
          className="btn btn-savechange-profile"
          onClick={onClick}
          disabled={disabled || false}
        >
          Save Change
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Index;
