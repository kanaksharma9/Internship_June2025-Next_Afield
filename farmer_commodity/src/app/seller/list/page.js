'use client'

import { useState, React } from 'react';
import { useRouter } from 'next/navigation'

function Page(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [available, setAvailable] = useState(0);
    const router = useRouter()
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !price.trim() || !price.trim()) return;
    const newCrop = { name, price, available };

    await fetch("/api/lists", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( newCrop ),
  });
  
    alert("Crop added");
    router.push('/seller/search');
    setName("");
    setPrice(0);
    setAvailable(0);
  };

    return (
      <div className='bg-emerald-800 h-screen flex'>
          <div className="  border-2 mx-125 my-25 max-h-100 bg-white rounded">
        <h1 className='text-4xl mx-55 p-2'>List Crops</h1>
         <form onSubmit={handleSubmit} >
        <div className='mx-35 p-1 my-1'>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className='border rounded'
          />
        </div>
        <br />
        <div className='mx-35 p-1 my-1'>
          <label>Price: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter email"
            className='border rounded'
          />
        </div>
        <br/>
        <div className='mx-35 p-1 my-1'>
        <label>Available: </label>
          <input
            type="number"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
            placeholder="Enter Password"
            className='border rounded'
          />
        </div>
        <br />
        <button type="submit" className='mx-55 p-1 rounded bg-lime-500'>Add crop</button>
      </form>
      
    </div>
    </div>
    )
}

export default Page;