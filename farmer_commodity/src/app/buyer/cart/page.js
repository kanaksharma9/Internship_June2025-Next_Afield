'use client'
import React from 'react'
import { useState } from 'react';


function Page(){
  const [num, setNum] = useState(0);

  const refresh = async(e) =>{
    const res = await fetch("/api/items");
    const data = await res.json();
    setNum(data);
  }
  return (
    <div className='mx-120 font-extrabold'>
      <h2 className='text-4xl'>Total items: {num}</h2>
    </div>
  )
}

export default Page;
