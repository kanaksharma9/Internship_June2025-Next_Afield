'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

function Page() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    const loadCrops = async () => {
      const res = await fetch("/api/lists");
      const data = await res.json();
      setCrops(data);
    };
    loadCrops();
  }, []);

  return (
    <div >
      <h1 className='font-extrabold mx-150 text-4xl'>Available Crops</h1>
      <ul className="flex flex-row">
        {crops.map((crop, index) => (
          <li key={index} className="columns-auto m-10">
            <div className="bg-blue aspect-square">
              <Image src="/farmer.jpg" alt="crop" width={400} height={400} />
              <h3>{crop.name}</h3>
              <h4>Price: {crop.price}</h4>
              <h4>Available: {crop.available}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
