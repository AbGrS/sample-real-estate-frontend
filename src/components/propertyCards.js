import React from 'react';
import './propertyCard.css';
import { CiHeart } from "react-icons/ci";
import { BsFillHeartFill } from "react-icons/bs";

function PropertyCards({_id, title, description, price, location, isFavourite, imageURL, onFavClick}) {

  return (
    <>
    <li className='li-card'>
        <div style={{position: 'relative'}}>
        <img src={imageURL} />
          <div style={{position: 'absolute', top: '5px', right: '5px', color:'#fff', fontSize: 'xx-large'}}>
            {!isFavourite ? <CiHeart color='#fff' onClick={()=>onFavClick(_id, true)}/> : <BsFillHeartFill color='#fc5871' onClick={()=>onFavClick(_id, false)}/>}
          </div>
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