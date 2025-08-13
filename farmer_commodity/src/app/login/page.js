'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState, React } from 'react';
import { useRouter } from 'next/navigation'

function Page(){

    const  [role, setRole] = useState("buyer");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    const router = useRouter()
    
    const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
    alert("User with this email already exists!");
    return;
    }

    const newUser = { name, email, role };
    setUsers((prev) => [...prev, newUser]);
    
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
      
      
    </div>
    )
}

export default Page;