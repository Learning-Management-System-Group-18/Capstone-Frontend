import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function ContentShow() {
  return (
    <div className="">
      <p className="heading_3_user tittle-section">Video - Introduction</p>

      <iframe
        width="984"
        height="567"
        src="https://www.youtube.com/embed/EtrL9NkEphg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="content-section"
      ></iframe>
      <div
        style={{ backgroundColor: "#C8D9FC" }}
        className="d-flex justify-content-around"
      >
        <div>
          <button style={{ border: "none", background: "none" }}>
            <IoIosArrowUp className="arrow-left mt-4 " />
          </button>
        </div>
        <div className="my-4">
          <button className="subtitle_2_user btn-completed">Completed</button>
        </div>
        <div>
          <button style={{ border: "none", background: "none" }}>
            <IoIosArrowUp className="arrow-right mt-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentShow;
