import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ReactPlayer from "react-player/lazy";
import axiosInstance from "../../networks/apis";

function ContentShow({ currentContent }) {
  const completed = async (id, type) => {
    const tipe = type.toLowerCase();
    const idString = id.toString();

    await axiosInstance
      .post(`api/auth/${tipe}?id=${idString}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="">
      <p className="heading_3_user tittle-section">
        {currentContent[1]} - {currentContent[0]?.title}
      </p>
      {currentContent[1] === "Video" ? (
        <ReactPlayer
          url={currentContent[0]?.link}
          width={"984px"}
          height={"567px"}
          className="content-section"
          light={true}
          controls={true}
          previewTabIndex={1}
        />
      ) : (
        <iframe
          width="984"
          height="567"
          src={currentContent[0]?.link}
          title="player"
          allowfullscreen
          className="content-section"
        ></iframe>
      )}

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
          {currentContent[0]?.completed ? (
            <button className="subtitle_2_user btn-completed-true" disabled>
              Completed
            </button>
          ) : (
            <button
              className="subtitle_2_user btn-completed"
              onClick={() => {
                completed(currentContent[0].id, currentContent[1]);
              }}
            >
              Completed
            </button>
          )}
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
