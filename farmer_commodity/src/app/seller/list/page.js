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
    <div className="">
        <h1>List Crops</h1>
         <form onSubmit={handleSubmit} >
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <br />
        <div>
          <label>Price: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <br/>
        <div>
        <label>Available: </label>
          <input
            type="number"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <br />
        <button type="submit">Add crop</button>
      </form>
      
    </div>
    )
}

export default Page;