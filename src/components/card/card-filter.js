import React, { useState } from 'react';
import Card from './card';
import './card.css';

const CardFilter = ({ data }) => {
    return (
        <div className='card-wrapper'>
            {
                data.map((item, index) => (
                    <Card key={index} {...item}/>
                ))
            }
        </div>
    )
}

export default CardFilter;