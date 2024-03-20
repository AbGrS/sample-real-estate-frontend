import React from 'react';
import './propertyCard.css';
import { CiHeart } from "react-icons/ci";
import { BsFillHeartFill } from "react-icons/bs";

import PopupForVerticalEllipsis from "./popupForVerticalEllipsis";


function PropertyCards({_id, title, description, price, location, isFavourite, imageURL, onFavClick, deleteClick}) {
 
  const handleItemClick = (item)=>{
    debugger;
    const {innerText} = item.target;
    const option = innerText.toLowerCase();
    if(option=== 'edit'){
      alert('Api in Progress...')
    }else if(option === 'delete'){
      deleteClick(_id); 
    }
  }
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

            <div style={{display: 'flex'}}>
              {description}
             
               <PopupForVerticalEllipsis handleItemClick={handleItemClick} _id={_id}/>
              
            </div>
           
            
        </div>
        
    </li>

    </>
  );
}

export default PropertyCards;
