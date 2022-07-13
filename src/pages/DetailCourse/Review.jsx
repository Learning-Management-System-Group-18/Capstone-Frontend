import React from "react";
import { AiFillStar } from "react-icons/ai";
import { avatarProfil } from "../../assets";

const Review = ({ data, reviews }) => {
  const x = data.rating;
  const valRating = x?.toFixed(1);
  return (
    <>
      {/* SINGLE RATING */}
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex align-items-center gap-2">
          <AiFillStar
            className="secondary_1"
            style={{ width: "24px", height: "24px" }}
          />
          <div className="heading_5_user">
            {" "}
            {`${valRating} ( ${data?.count_review} review)`}
          </div>
        </div>
        <div className="heading_5_user">See All</div>
      </div>
      {/* SINGLE RATING */}

      {/* ALL RATING */}
      <div className="d-flex gap-5 mt-3 mb-4">
        <div className="d-flex align-items-center gap-2 bg_primary single-rating">
          <AiFillStar
            style={{
              width: "24px",
              height: "24px",
              color: "white",
              cursor: "pointer",
            }}
          />
          <div className="subtitle_2_user text-white">All</div>
        </div>
        <div className="d-flex align-items-center gap-2 single-rating the-rating">
          <AiFillStar
            style={{
              width: "24px",
              height: "24px",
              color: "#335EF7",
              cursor: "pointer",
            }}
          />
          <div className="subtitle_2_user text primary_1">1</div>
        </div>
        <div className="d-flex align-items-center gap-2 single-rating the-rating">
          <AiFillStar
            style={{
              width: "24px",
              height: "24px",
              color: "#335EF7",
              cursor: "pointer",
            }}
          />
          <div className="subtitle_2_user text primary_1">2</div>
        </div>
        <div className="d-flex align-items-center gap-2 single-rating the-rating">
          <AiFillStar
            style={{
              width: "24px",
              height: "24px",
              color: "#335EF7",
              cursor: "pointer",
            }}
          />
          <div className="subtitle_2_user text primary_1">3</div>
        </div>
        <div className="d-flex align-items-center gap-2 single-rating the-rating">
          <AiFillStar
            style={{
              width: "24px",
              height: "24px",
              color: "#335EF7",
              cursor: "pointer",
            }}
          />
          <div className="subtitle_2_user text primary_1">4</div>
        </div>
        <div className="d-flex align-items-center gap-2 single-rating the-rating">
          <AiFillStar
            style={{
              width: "24px",
              height: "24px",
              color: "#335EF7",
              cursor: "pointer",
            }}
          />
          <div className="subtitle_2_user text primary_1">5</div>
        </div>
      </div>

      {/* ALL RATING */}

      {/* THE REVIEW */}

      {reviews?.map((review, i) => (
        <>
          <div className="box-review mb-4" key={i}>
            {/* person */}
            <div className="d-flex align-items-center gap-3">
              <img src={avatarProfil} alt="mentor" className="img-mentor" />
              <div className="subtitle_2_user">{review.user.full_name}</div>
              <div className="d-flex align-items-center gap-2 single-rating the-rating">
                <AiFillStar
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "#335EF7",
                  }}
                />
                <div className="subtitle_2_user text primary_1">
                  {review.rating}
                </div>
              </div>
            </div>
            {/* person */}

            {/* review */}
            <div className="caption_1_user mt-3">{review.review}</div>
            {/* review */}

            {/* Like and Time */}
            {/* <div className="d-flex align-items-center mt-2">
          <AiFillHeart
            style={{ color: "red", width: "16px", height: "16px" }}
          />
          <span className="neutral_2 caption_1_user ms-2 me-3">50</span>
          <span className="neutral_2 caption_1_user">2 Weeks Ago</span>
        </div> */}
            {/* Like and Time */}
          </div>
          {/* THE REVIEW */}
        </>
      ))}
    </>
  );
};

export default Review;
