import React, { useState } from 'react';
import './style.css';
import { quoteIcon, arrowRightOrange, arrowLeft } from '../../assets';

const Index = ({ data }) => {

    // contoh data
    // const data = [
    //     {
    //         quotes_desc: "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
    //         reviewer_profile:
    //         {
    //           img_reviewer: "https://i.pravatar.cc/300",
    //           reviewer_name: "ani",
    //           reviewer_job: "Frontend Developer",
    //         }
    //       },
    //       {
    //         quotes_desc: "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
    //         reviewer_profile:
    //         {
    //           img_reviewer: "https://i.pravatar.cc/400",
    //           reviewer_name: "Rizky",
    //           reviewer_job: "Backend Developer",
    //         }
    //       },
    //       {
    //         quotes_desc: "Online course yang paling keren sih, materi yang disampaikan benar benar yang dipakai di dunia kerja dan dapat portfolio yang bisa digunakan untuk melamar magang atau kerja",
    //         reviewer_profile:
    //         {
    //           img_reviewer: "https://i.pravatar.cc/500",
    //           reviewer_name: "Nopal",
    //           reviewer_job: "Backend Developer",
    //         }
    //       },
    // ]

    const [count, setCount] = useState(0);
    const [maxCount, setMaxCount] = useState(3);

    const dataShow = [];

    let i = count;
    let j = maxCount;

    if (dataShow.length === 0) {

        if (data.length < maxCount) {
            for (i; i < data.length; i++) {
                dataShow.push(
                    <div key={i} className='col bg_neutral_4 shadow-sm review_card'>
                        <img className='quotation m-3' src={quoteIcon} alt="quote-icon" />
                        <p className='caption_2 m-3'>{data[i].quotes_desc}</p>
                        <div className='reviewer_card d-flex'>
                            <img className='reviewer_img rounded-circle' src={data[i].reviewer_profile.img_reviewer} alt="" />
                            <div className='ms-2'>
                                <h5 className='body_3'>{data[i].reviewer_profile.reviewer_name}</h5>
                                <p className='caption_2 neutral_2'>{data[i].reviewer_profile.reviewer_job}</p>
                            </div>
                        </div>
                    </div>
                )
                // console.log(i);
            };
        } else {
            for (i; i < maxCount; i++) {
                dataShow.push(
                    <div key={i} className='col-4 bg_neutral_4 shadow-sm review_card'>
                        <img className='quotation m-3' src={quoteIcon} alt="quote-icon" />
                        <p className='caption_2 m-3'>{data[i].quotes_desc}</p>
                        <div className='reviewer_card d-flex'>
                            <img className='reviewer_img rounded-circle' src={data[i].reviewer_profile.img_reviewer} alt="" />
                            <div className='ms-2'>
                                <h5 className='body_3'>{data[i].reviewer_profile.reviewer_name}</h5>
                                <p className='caption_2 neutral_2'>{data[i].reviewer_profile.reviewer_job}</p>
                            </div>
                        </div>
                    </div>
                )
                console.log(i);
            };
        }

    }

    console.log(dataShow);

    const handlePrevReviews = () => {
        if (count > 0) {
            if (dataShow.length < 3) {
                setCount(count - 3);
                setMaxCount(maxCount - dataShow.length);
            } else {
                setCount(count - 3);
                setMaxCount(maxCount - 3);
            }
        }

        for (j; j > count; j--) {
            dataShow.push(
                <div key={j} className='col-4 bg_neutral_4 shadow-sm review_card'>
                    <img className='quotation m-3' src={quoteIcon} alt="quote-icon" />
                    <p className='caption_2 m-3'>{data[j].quotes_desc}</p>
                    <div className='reviewer_card d-flex'>
                        <img className='reviewer_img rounded-circle' src={data[j].reviewer_profile.img_reviewer} alt="" />
                        <div className='ms-2'>
                            <h5 className='body_3'>{data[j].reviewer_profile.reviewer_name}</h5>
                            <p className='caption_2 neutral_2'>{data[j].reviewer_profile.reviewer_job}</p>
                        </div>
                    </div>
                </div>
            )
            console.log(data[j].quotes_desc);
        };
    }

    const handleNextReviews = () => {
        if (maxCount < data.length) {
            setCount(count + 3);
            if (maxCount + 3 < data.length) {
                setMaxCount(maxCount + 3);
            } else {
                setMaxCount(data.length);
            }
        }
        for (i; i < maxCount; i++) {
            dataShow.push(
                <div key={i} className='col-4 bg_neutral_4 shadow-sm review_card'>
                    <img className='quotation m-3' src={quoteIcon} alt="quote-icon" />
                    <p className='caption_2 m-3'>{data[i].quotes_desc}</p>
                    <div className='reviewer_card d-flex'>
                        <img className='reviewer_img rounded-circle' src={data[i].reviewer_profile.img_reviewer} alt="" />
                        <div className='ms-2'>
                            <h5 className='body_3'>{data[i].reviewer_profile.reviewer_name}</h5>
                            <p className='caption_2 neutral_2'>{data[i].reviewer_profile.reviewer_job}</p>
                        </div>
                    </div>
                </div>
            )
            // console.log(i);
        };
    }

    return (
        <div className='card_reviews'>
            <div className='d-flex justify-content-center'>
                {/* {data.map((item, itemIdx) => (
                    <div key={itemIdx} className='col-4 bg_neutral_4 shadow-sm review_card'>
                        <img className='quotation m-3' src={quoteIcon} alt="quote-icon" />
                        <p className='caption_2 m-3'>{item.quotes_desc}</p>
                        <div className='reviewer_card d-flex'>
                            <img className='reviewer_img rounded-circle' src={item.reviewer_profile.img_reviewer} alt="" />
                            <div className='ms-2'>
                                <h5 className='body_3'>{item.reviewer_profile.reviewer_name}</h5>
                                <p className='caption_2 neutral_2'>{item.reviewer_profile.reviewer_job}</p>
                            </div>
                        </div>
                    </div>
                ))} */}
                {
                    dataShow
                }
            </div>
            <div className='d-flex justify-content-center my-3'>
                <img onClick={handlePrevReviews} className='icon_arrow' src={arrowLeft} alt="" />
                <img onClick={handleNextReviews} className='icon_arrow' src={arrowRightOrange} alt="" />
            </div>
            {/* <button onClick={handlePrevReviews}>prev</button>
            <button onClick={handleNextReviews}>next</button> */}
        </div>
    );
}

export default Index;
