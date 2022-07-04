import React from 'react';
import './style.css';
import { employeeTotalIcon, starOrange, starWhite } from '../../assets';
import { Button, StarRating } from '../index';

const Index = ({ data }) => {

    return (
        <div className='row justify-content-center'>
            {
                data.map((item, itemIdx) => (
                    <div className={item.class_category !== undefined ? "col-3 mb-3 bg_neutral_4 card_popular_class mx-2 shadow-sm container" : "col-4 bg_neutral_4 card_popular_class_2 mx-2 shadow-sm container"} key={itemIdx}>
                        <div>
                            <img className='card_banner' src={item.img} alt="" />
                        </div>
                        {
                            item.class_category !== undefined ? (
                                <div className='mt-3 category_name_card'>
                                    <p className='body_2 secondary_1'>{item.class_category}</p>
                                </div>
                            ) : ("")
                        }
                        <h2 className='mt-3 heading_5'>{item.title}</h2>
                        <div className='box_inline'>
                            <h5 className='subtitle_3 me-3'>{item.price === 0 ? "Free Course" : item.price}</h5>
                            <div className='class_level_card'>
                                <p className='body_2 primary'>{item.class_level}</p>
                            </div>
                        </div>
                        <div className='mt-3 total_employee'>
                            <img className='employee_icon d-inline me-2' src={employeeTotalIcon} alt="icon" />
                            <h4 className='caption_1 d-inline'>{item.total_employee} employees</h4>
                        </div>
                        <div>
                            {/* <img className='d-inline me-2' src="" alt="icon" /> */}
                            <StarRating rating={item.star} />
                            <h4 className='d-inline neutral_2 body_2'>{item.star + " (" + item.total_review + ") Reviews"}</h4>
                        </div>
                        <div className='mt-4 text-center'>
                            <Button type="btn-seedetail" />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Index;
