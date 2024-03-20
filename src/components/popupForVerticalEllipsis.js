import React, {useState, useEffect} from 'react';
import './verticalEllipsis.css'
import { HiEllipsisVertical } from "react-icons/hi2";
import useHandleVerticalEllipsisVisibility from "../customHooks/customHooksForVerticalEllipsis";

function PopupForVerticalEllipsis({_id, handleItemClick}) {

  const [elementRef, showVisibility, setShowVisibility] = useHandleVerticalEllipsisVisibility(false)

  return (
    <>
    <div ref={elementRef} style={{marginLeft: 'auto', position: 'relative'}}>
        <HiEllipsisVertical />

        {
            showVisibility ? (<div style={{position: 'absolute', background: '#fff', right: 0, bottom: 0}}>
            <div className='mainSection' onClick={handleItemClick}>
                <div className='menu'>
                    Edit
                </div>
                <div className='menu'>
                    Delete
                </div>
            </div>
        </div>) : ''
        }
        
    </div>
    </>
  );
}

export default PopupForVerticalEllipsis;
