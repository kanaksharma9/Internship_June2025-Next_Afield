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
    <div className="">
        <h1>Signin</h1>
         <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
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
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <br/>
        <div>
        <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <br />
        <div>
          <label>Role: </label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <br />
        <button type="submit">Signin</button>
      </form>
      <p>Already a user?</p>
     <Link className='' href='/login'> 
              <button className='rounded shadow bg-cyan-300 p-2  text-1.5xl hover:bg-sky-700'>Login</button>
      </Link>
      
    </div>
    )
}

export default Page;