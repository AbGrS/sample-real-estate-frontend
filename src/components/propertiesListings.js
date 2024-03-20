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

  const addClick = async ()=>{
    try{
      const response = await fetch('https://sample-real-estate-backend.onrender.com/api/properties/postProperty', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
            title: 'one more property', 
            description: "some great desccription" || '', 
            price: 1000000, 
            location: 'Noida' || '',  
            imageURL: 'https://img.freepik.com/premium-photo/house-loupe-magnifying-glass-real-estate-searching-concept-house-search-house-hunting-3d_505080-447.jpg?size=626&ext=jpg&ga=GA1.1.1011931459.1710832452&semt=ais' || ''
       })
     });

     response.json().then(k=>{
       const copyData = [...data, k];
       setData(copyData)
     })
     
   }catch(error){
     console.log('Error occurred', error);
   }
  }

  const crudOperators = {
    onFavClick,
    addClick,
    deleteClick,

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
          <PropertyCards key={index} crudOperators={crudOperators} {...item}/>
        ))}
      </ul>
    </div>
  );
}

export default PropertyListings;
