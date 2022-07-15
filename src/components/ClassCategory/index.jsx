import React from "react";
import "./style.css";
import { arrowRightOrange } from "../../assets";
import { useNavigate } from "react-router-dom";

const Index = ({ title, cardData }) => {
  const navigate = useNavigate();

  const handleClikToCategory = (id, name) => {
    let titleSlug = name
      .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
      .toLowerCase();
    titleSlug = titleSlug.replace(/^\s+|\s+$/gm, "");
    titleSlug = titleSlug.replace(/\s+/g, "-");

    console.log(titleSlug);
    navigate(`/class-category/${titleSlug}/${id}`);
  };

  return (
    <div>
      <div>
        <h2 className="heading_2 text-center mb-5">{title}</h2>
      </div>
      <div className="row justify-content-center">
        {cardData.map((item, itemIdx) => (
          <div
            className="col-3 container card_category shadow-sm bg_neutral_4 mx-2 mb-2 p-3"
            key={itemIdx}
          >
            <img className="icon_category" src={item.url_image} alt="icon" />
            <div className="title_card px-2">
              <h5 className="subtitle_3">{item.title}</h5>
              <img
                onClick={() => handleClikToCategory(item.id, item.title)}
                className="arrow_icon"
                src={arrowRightOrange}
                alt="arrow"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
