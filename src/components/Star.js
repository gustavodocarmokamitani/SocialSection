import React from 'react';

import './Star.scss';

import star from '../assets/icon-star.svg';

import {

} from 'react-bootstrap';

const Star = ({text}) => {
    return (
        <div className='hero__star'>
            <span>
                <div className='d-block d-lg-inline-block'>
                <img src={star} alt='stars' />
                <img src={star} alt='stars' />
                <img src={star} alt='stars' />
                <img src={star} alt='stars' />
                <img src={star} alt='stars' />
                </div>
                <p className='d-inline-block'>{text}</p>
            </span>
        </div>
    );
}

export default Star;