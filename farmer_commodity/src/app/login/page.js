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
    <div className="">
        <h1>Login</h1>
         <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
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
        <button type="submit">Login</button>
      </form>
      
      
    </div>
    )
}

export default Page;