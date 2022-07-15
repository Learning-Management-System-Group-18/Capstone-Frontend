import React from "react";
import { imageCourse } from "../../assets";
import "./style.css";
import { GoPrimitiveDot } from "react-icons/go";
import { useState } from "react";
import { PopupSubmitReview } from "..";

const Index = ({
  status,
  imgCourse,
  titleCourse,
  categoryCourse,
  totalSection,
  isCompleted,
  description,
  level,
  id
}) => {
  // --- contoh data ---
  // status = "completed";
  // imgCourse = imageCourse;
  // titleCourse = "Social Media Marketing";
  // categoryCourse = "Business Development";
  // description = "Description...";
  // totalSection = 156;
  // isCompleted = 70;
  // level = "Intermediate";
  const Childdiv = {
    height: "100%",
    width: `${(isCompleted / totalSection) * 100}%`,
    backgroundColor: "#4D82EA",
    borderRadius: "15px",
    textAlign: "right",
  };
  // const [id, setId] = useState(null);
  const [showReview, setShowReview] = useState(false);
  const handleShowReview = () => {
    // setId(id);
    setShowReview(true);
    console.log(showReview);
  };

  const handleCloseReview = () => setShowReview(false);

  return (
    <div>
      <PopupSubmitReview
        handleCloseReview={handleCloseReview}
        showReview={showReview}
        idCourse={id}
      />

      {status === "ongoing" ? (
        <div className="my-course mb-5">
          <div className="row">
            <div className="col-4 me-4">
              <img src={imgCourse} className="img-course" alt="" />
            </div>
            <div className="col-7">
              <div className="body_2_user d-flex align-items-center gap-1 category-course secondary_1">
                <GoPrimitiveDot /> {categoryCourse}
              </div>
              <div className="heading_4_user my-2">{titleCourse}</div>
              <div className="d-flex align-items-center gap-2">
                <div className="parent-div">
                  <div style={Childdiv}></div>
                </div>
                <div>{isCompleted + "/" + totalSection}</div>
              </div>
              <button className="continue-course bg_primary body_1">
                Continue Course
              </button>
            </div>
          </div>
        </div>
      ) : status === "completed" ? (
        <div className="my-course mb-5">
          <div className="row">
            <div className="col-4 me-4">
              <img src={imgCourse} className="img-course" alt="" />
            </div>
            <div className="col-7">
              <div className="body_2_user d-flex align-items-center gap-1 category-course secondary_1">
                <GoPrimitiveDot /> {categoryCourse}
              </div>
              <div className="mt-1 heading_4_user">{titleCourse}</div>
              <div className="d-flex align-items-center gap-2">
                <div className="parent-div">
                  <div style={Childdiv}></div>
                </div>
                <div>{isCompleted + "/" + totalSection}</div>
              </div>
              <div className="description-course">{description}</div>
              <div className="d-flex gap-3 mt-4 body_1">
                <button className="btn-certificate ">
                  Download Certificate
                </button>
                <button className="btn-review" onClick={handleShowReview}>
                  Write Review
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-course mb-5">
          <div className="row">
            <div className="col-4 me-4">
              <img src={imgCourse} className="img-course" alt="" />
            </div>
            <div className="col-7">
              <div className="heading_4_user my-2">{titleCourse}</div>
              <div className="level-category-course caption_1_user">
                {level}
              </div>
              <div className="d-flex align-items-center gap-2">
                <div className="parent-div">
                  <div style={Childdiv}></div>
                </div>
                <div>{isCompleted + "/" + totalSection}</div>
              </div>
              <button className="continue-course bg_primary body_1">
                Continue Course
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
