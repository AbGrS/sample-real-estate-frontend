import React from 'react';
import './propertyCard.css';

function PropertyCards({title, description, price, location, imageURL}) {

  return (
    <>
    <li className='li-card'>
        <div>
        <img src={imageURL} />
        </div>
        <div className='card-main-section'>
        
            <div className='sub-section'>
                <h3>{title}</h3>
                <span className='price'>{'$' + price}</span>
            </div>
        
            <div className='location'>
                {location}
            </div>
            {description}
        </div>
        
    </li>

    </>
  );
}

export default PropertyCards;
