import React, { useEffect, useState } from 'react';
import PropertyCards from './propertyCards';

function PropertyListings() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://sample-real-estate-backend.onrender.com/api/properties');
      const jsonData = await response.json();
      setData(jsonData);
      setOriginalData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const onFavClick = async (_id, flag)=>{
    try{
       const response = await fetch('https://sample-real-estate-backend.onrender.com/api/properties/updateFav', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({_id, flag})
      });

      response.json().then(k=>{
        const copyData = [...data];

        for(let item of copyData){
          if(item._id === _id){
            item.isFavourite = !item.isFavourite;
          }
        }
        setData(copyData)
      })
      
    }catch(error){
      console.log('Error occurred', error);
    }
  }

  const deleteClick = async (_id)=>{
    try{
      const response = await fetch('https://sample-real-estate-backend.onrender.com/api/properties/deleteProperty', {
       method: 'DELETE',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({_id})
     });

     response.json().then(k=>{
       const copyData = [...data];

       copyData.forEach((item, index)=>{
        if(item._id === _id){
          copyData.splice(index, 1)
        }
       })
       setData(copyData)
     })
     
   }catch(error){
     console.log('Error occurred', error);
   }
  }

  const setAllFavourites = ()=>{
    const copyData = data.filter(d=>d.isFavourite);
    setData(copyData);
  }

  if(loading) return <div className='heading'>Loading...</div>
  return (
    <div>
      <h2 className='heading'>Explore the Properties</h2>

      <div className='buttonContainer'>
        <button onClick={()=>setData(originalData)}>All</button> <button onClick={setAllFavourites}>Favourites</button>
      </div>
     
      
      <ul className='main-container'>
       
        {data.map((item, index) => (
          <PropertyCards key={index} onFavClick={onFavClick} deleteClick={deleteClick} {...item}/>
        ))}
      </ul>
    </div>
  );
}

export default PropertyListings;
