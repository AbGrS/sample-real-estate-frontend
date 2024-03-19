import React, { useEffect, useState } from 'react';
import PropertyCards from './propertyCards';

function PropertyListings() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://sample-real-estate-backend.onrender.com/api/properties');
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };


  return (
    <div>
      <h2 className='heading'>Explore the Properties</h2>
      {loading && <div className='heading'>Loading...</div>}
      <ul className='main-container'>
        {data.map((item, index) => (
          <PropertyCards key={index} {...item}/>
        ))}
      </ul>
    </div>
  );
}

export default PropertyListings;
