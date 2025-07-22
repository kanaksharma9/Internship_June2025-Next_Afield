import React, { useEffect, useState } from 'react'

const FarmerList = () => {
    const [farmers, setFarmers] = useState([]);
    const [currentFarmer, setCurrentFarmer] = useState(null); // For editing

    useEffect(() => {
    const fetchFarmers = async () => {
        const response = await api.get('/');
        setFarmers(response.data);
    };
    fetchFarmers();
    }, []);
    return (
    <div>
      
    </div>
  )
}

export default FarmerList
