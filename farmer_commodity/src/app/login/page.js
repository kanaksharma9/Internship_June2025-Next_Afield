'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState, React } from 'react';
import { useRouter } from 'next/navigation'

function Page(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const router = useRouter()
    
    const handleSubmit = (e) => {
    e.preventDefault();
    if ( !email.trim()) return;

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
    alert("User with this email already exists!");
    return;
    }

    const newUser = { email, password };
    setUsers((prev) => [...prev, newUser]);
    
    router.push(role === "buyer" ? `/buyer?name=${encodeURIComponent(name)}` : `/seller?name=${encodeURIComponent(name)}`);

    setEmail("");
    setPassword("");
  };

    return (
      <div className='bg-emerald-800 h-screen flex'>
        <div className=" border-2 mx-120 my-25 max-h-80 bg-white rounded">
            <h1 className='text-4xl mx-55 p-2'>Login</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <br />
            <div className='mx-35 p-1 my-1'>
              <label>Email: </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className='border rounded'
              />
            </div>
            <div className='mx-35 p-1 my-1'>
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
            <button type="submit" className='mx-55 p-1 rounded bg-lime-500'>Login</button>
          </form>
        </div>
    </div>
    )
}

export default Page;