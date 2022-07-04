import React from 'react';
import './style.css';
import { starOrange, starWhite } from '../../assets';

const Index = ({ rating }) => {

    const orangeStar = [];
    const whiteStar = [];

    for (let i = 0; i < rating; i++) {
        orangeStar.push(<img className='d-inline star' src={starOrange} alt="icon" />)
    };
    for (let i = 0; i < 5 - rating; i++) {
        whiteStar.push(<img className='d-inline star' src={starWhite} alt="icon" />)
    };

    return (
        <div className='d-inline me-3'>
            {
                orangeStar
            }
            {
                whiteStar
            }
        </div>
    );
}

export default Index;
