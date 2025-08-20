'use client'

import { useState, React } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

function Page(){

    const  [role, setRole] = useState("buyer");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const newUser = { name, email,password, role };

    await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( newUser ),

  });

    
    router.push(role === "buyer" ? `/buyer?name=${encodeURIComponent(name)}` : `/seller?name=${encodeURIComponent(name)}`);

    setName("");
    setEmail("");
    setRole("buyer");
  };

    return (
      <div className='bg-emerald-800 h-screen flex'>
    <div className=" border-2 mx-120 my-25 max-h-120 bg-white rounded" >
        <h1 className='text-4xl mx-55 p-2'>Signin</h1>
         <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div className='mx-35 p-2 my-1'>
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
        <div className='mx-35 p-2 my-1'>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className='border rounded'
          />
        </div>
        <br/>
        <div className='mx-30 p-2 my-1'>
        <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className='border rounded'
          />
        </div>
        <br />
        <div className='mx-35 p-2 my-1'>
          <label>Role: </label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className='rounded p-1'>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <br />
        <button type="submit" className='mx-55 p-2 rounded bg-lime-500'>Signin</button>
      </form>
      <div className='flex mx-45'>
        <p className=''>Already a user?</p>
     <Link href='/login'> 
              <button className='rounded shadow bg-lime-500 p-1  text-1xl hover:bg-sky-700'>Login</button>
      </Link>
      </div>
      
      
    </div>
    </div>
    )
}

export default Page;