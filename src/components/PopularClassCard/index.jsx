import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { employeeTotalIcon, starOrange, starWhite } from '../../assets';
import { Button, StarRating } from '../index';

const Index = ({ data }) => {
  const navigate = useNavigate();

  const handleSeeDetail = (id) => {
    navigate(`/detail-course/${id}`);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {data.map((item, itemIdx) => (
        <div
          className={
            item.category.title !== undefined
              ? 'col-3 mb-3 bg_neutral_4 card_popular_class mx-2 shadow-sm container'
              : 'col-4 bg_neutral_4 card_popular_class_2 mx-2 shadow-sm container'
          }
          key={itemIdx}
        >
          <div className="card_banner">
            <img className="img_banner" src={item.url_image} alt="" />
          </div>
          {item.category.title !== undefined ? (
            <div className="mt-3 category_name_card">
              <p className="body_2 secondary_1">{item.category.title}</p>
            </div>
          ) : (
            ''
          )}
          <h2 className="mt-3 subtitle_1">{item.title}</h2>
          <div className="box_inline">
            <h5 className="subtitle_2 me-3">Free Course</h5>
            <div className="class_level_card">
              <p className="body_2 primary">{item.level}</p>
            </div>
          </div>
          <div className="mt-3 total_employee">
            <img
              className="employee_icon d-inline me-2"
              src={employeeTotalIcon}
              alt="icon"
            />
            <h4 className="caption_1 d-inline">{item.count_user} employees</h4>
          </div>
          <div>
            {/* <img className='d-inline me-2' src="" alt="icon" /> */}
            <StarRating rating={item.rating} />
            <h4 className="d-inline neutral_2 body_2">
              {Math.round(item.rating) + ' (' + item.count_review + ') Reviews'}
            </h4>
          </div>
          <div className="mt-4 text-center">
            <Button
              type="btn-seedetail"
              onClick={() => handleSeeDetail(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
