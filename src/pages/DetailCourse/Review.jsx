import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { avatarProfil } from "../../assets";

const Review = ({ data, reviews }) => {
  const x = data.rating;
  const valRating = x?.toFixed(1);

  // console.log("all", typeof reviews.rating);

  const dataRating = [1, 2, 3, 4, 5];

  const [star, setStar] = useState(0);

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const dts = reviews.filter((r) => {
      // console.log("df : ", typeof star);
      // console.log("r rt ", typeof r.rating);
      if (star == r.rating) {
        return r;
      } else if (star == 0) {
        return r;
      } else {
        return false;
      }
    });

    setFilterData(dts);
  }, [star]);

  console.log("fltr ", filterData);

  // setStar(1);

  // console.log(fltr);
  // const [active, setActive] = useState();

  const fillStarActive = {
    width: "24px",
    height: "24px",
    color: "white",
  };
  const fillStar = {
    width: "24px",
    height: "24px",
    color: "#335EF7",
  };

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
        <div
          className={`d-flex align-items-center gap-2 single-rating ${
            star === 0 ? ` bg_primary ` : `the-rating`
          }`}
          onClick={() => setStar(0)}
        >
          <AiFillStar style={star === 0 ? fillStarActive : fillStar} />
          <div
            className={`subtitle_2_user ${
              star === 0 ? ` text-white ` : `text primary_1 `
            }`}
          >
            All
          </div>
        </div>

        {dataRating.map((item, i) => (
          <>
            <div
              className={`d-flex align-items-center gap-2 single-rating ${
                star === item ? ` bg_primary ` : `the-rating`
              }`}
              key={i}
              onClick={() => setStar(item)}
            >
              <AiFillStar style={star === item ? fillStarActive : fillStar} />
              <div
                className={`subtitle_2_user ${
                  star === item ? ` text-white ` : `text primary_1 `
                }`}
              >
                {item}
              </div>
            </div>
          </>
        ))}
      </div>

      {/* ALL RATING */}

      {/* THE REVIEW */}

      {filterData.length !== 0 ? (
        filterData?.map((review, i) => (
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
        ))
      ) : (
        <div className="mt-5 text-center heading_5_user">Review Belum Ada</div>
      )}
    </>
  );
};

export default Review;
