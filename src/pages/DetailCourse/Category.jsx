import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";

const Category = ({ data }) => {
  const x = data.rating;
  const rating = Math.round(x);
  const valRating = x?.toFixed(1);

  const allRating = [];

  for (let a = 1; a <= 5; a++) {
    if (a <= rating) {
      allRating.push(<AiFillStar className="rating-detail secondary_1" />);
    } else {
      allRating.push(<AiFillStar className="rating-detail color_default" />);
    }
  }

  return (
    <>
      <div className="d-flex flex-colummn">
        <div className="d-flex gap-3">
          <div className="heading_4"> {data?.title || " "} </div>
          <div className="body_2_user d-flex align-items-center gap-1 category-course secondary_1">
            <GoPrimitiveDot /> {data.category?.title || " "}
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="d-flex gap-2 ">
          {allRating.map((rating, i) => (
            <span key={i}>{rating}</span>
          ))}
        </div>

        <div className="caption_2_user" style={{ color: " #7C8B99" }}>
          {`${valRating} ( ${data?.count_review} review)`}
        </div>
      </div>
    </>
  );
};

export default Category;
