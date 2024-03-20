import React, {useState, useRef, useEffect} from "react";

function useHandleVerticalEllipsisVisibility(visibility){
    const elementRef = useRef(null);
    const [showVisibility, setShowVisibility] = useState(false);

    const handleClickOutside = (e)=>{
        if(elementRef.current && !elementRef.current.contains(e.target)){
            setShowVisibility(false);
        }else{
            setShowVisibility(true)
        }
    }
    useEffect(()=>{
        document.addEventListener('click', handleClickOutside);
        return()=>{ 
            document.removeEventListener('click', handleClickOutside);
        }
    },[])

    return [elementRef, showVisibility, setShowVisibility]

}

export default useHandleVerticalEllipsisVisibility;
