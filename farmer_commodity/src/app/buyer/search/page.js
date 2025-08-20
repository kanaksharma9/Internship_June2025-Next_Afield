'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image';

function Page () {
  const [cropInput, setCropInput] = useState('');
  const [crops, setCrops] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cropInput.trim()) return;

    await fetch("/api/crops", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ crop: cropInput }),
  });

  const res = await fetch("/api/crops");
  const data = await res.json();
  setCrops(data);

    setCropInput('');
  }
  return (
    <div>
        <div className='flex flex-col'>
        <form onSubmit={handleSubmit} >
            <div className='mx-150 my-8'>
                <label>Search: </label>
                <input
                    className='border rounded p-2'
                    type="text"
                    value={cropInput}
                    onChange={(e) => setCropInput(e.target.value)}
                    placeholder="Wheat"
                />
            </div>
        </form>
        <ul className='mx-150 my-2'>
            {crops.map((crop, index)=>(
                <li key={index} className='rounded border my-3 p-1'>{crop.crop}</li>
            ))}
        </ul>
        </div>
        <div className='columns-3 m-16'>
            <div className='bg-blue aspect-square'>
                <Image 
                src='/farmer.jpg'
                alt='1'
                width={400}
                height={400}/>
                <h3>Ragi</h3>
            </div>
            <div className='bg-blue aspect-square'>
                                <Image 
                src='/farmer.jpg'
                alt='1'
                width={400}
                height={400}/>
                <h3>Muesli</h3>
            </div>
            <div className='bg-blue aspect-square'>
                                <Image 
                src='/farmer.jpg'
                alt='1'
                width={400}
                height={400}/>
                <h3>Wheat</h3>
            </div>
            <div className='bg-blue aspect-square'>
                <Image 
                src='/farmer.jpg'
                alt='1'
                width={400}
                height={400}/>
                <h3>Sunflower Seeds</h3>
            </div>
            <div className='bg-blue aspect-square'>
                                <Image 
                src='/farmer.jpg'
                alt='1'
                width={400}
                height={400}/>
                <h3>Pumpkin Seeds</h3>
            </div>
            <div className='bg-blue aspect-square'>
                                <Image 
                src='/farmer.jpg'
                alt='1'
                width={400}
                height={400}/>
                <h3>Flax seeds</h3>
            </div>
        </div>
    </div>
  )
}


export default Page
