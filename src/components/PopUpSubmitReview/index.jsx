import React from "react";
import { GrClose } from "react-icons/gr";
import { Modal } from "react-bootstrap";
import "./style.css";
import { Form } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import axiosInstance from "../../networks/apis";

const Index = ({ handleCloseReview, showReview, idCourse }) => {
  const rating = [
    {
      val: 1,
      isYellow: false,
    },
    {
      val: 2,
      isYellow: false,
    },
    {
      val: 3,
      isYellow: false,
    },
    {
      val: 4,
      isYellow: false,
    },
    {
      val: 5,
      isYellow: false,
    },
  ];

  const [ratings, setRatings] = useState(rating);
  const [val, setVal] = useState();
  const [review, setReview] = useState();
  //   console.log(rating);

  const changeRating = (val) => {
    setVal(val);
    const newRating = ratings.map((i) => {
      if (i.val <= val) {
        return { val: i.val, isYellow: true };
      } else {
        return { val: i.val, isYellow: false };
      }
    });

    setRatings(newRating);
  };

  const [success, setSuccess] = useState(false);

  const createReview = async (idCourse, data) => {
    await axiosInstance
      .post(`/api/auth/review?courseId=${idCourse}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setSuccess(!success);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    console.log("rating", val);
    console.log("review", review);
    const data = {
      review: review,
      rating: val,
    };
    await createReview(idCourse, data);
    // console.log("newRatings", ratings);
    setVal(null);
    setReview("");
    setRatings(rating);
    handleCloseReview();
  };

  return (
    <div>
      <Modal show={showReview}>
        <Modal.Body>
          <GrClose className="icon-close-popup" onClick={handleCloseReview} />
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="heading_4_user">Share Your Feedback</div>
            <div className="body_1_user">Tell us how your experience</div>
          </div>

          <div className="px-3">
            <Form.Label className="subtitle_3_user">Rating</Form.Label>
            <div className="mb-3 d-flex gap-3">
              {ratings.map((i, index) => (
                <AiFillStar
                  className={
                    i.isYellow ? `rating secondary_1` : `rating color_default`
                  }
                  key={index}
                  onClick={() => changeRating(i.val)}
                />
              ))}
            </div>
            <Form.Label className="subtitle_3_user">Review</Form.Label>
            <div className="mb-3 text-start ">
              <textarea
                type="text"
                placeholder="Add your review"
                className="form-control mr-3 mb-3 radiusborder"
                onChange={(e) => setReview(e.target.value)}
                value={review}
                name="review"
                rows={8}
                required
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-5">
            <button
              className="btn-submit-review subtitle_2_user"
              onClick={handleSubmitReview}
            >
              Submit Review
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Index;
