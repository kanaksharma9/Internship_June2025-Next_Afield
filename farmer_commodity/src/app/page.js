
"use client";

import Link from 'next/link';
import "./globals.css";
import Image from 'next/image';

export default function Page() {
  return (
    < div className='h-screen bg-emerald-800'>
      <div className='bg-lime-500 flex justify-between h-15 p-4'>
          <h3 className='order-1 text-2xl font-extrabold'>MarketPlace </h3>
          <Link className='order-3' href='/signin'> 
              <button className='rounded shadow font-medium p-1 bg-emerald-600 hover:bg-emerald-300'>Sign/Login</button>
          </Link>
      </div>
      <div className='flex space-x-8 m-36 '>
          <div>
            <p className='text-1xl text-white my-24 font-sans font-bold'>kejdhghwjqkl;wqkjhgvfwdhbxskmlxjnhbvcgxfvhbjnkjhg <br/>
            ytfrdesrdtfyguhijokpkjihukygjchb</p>
          </div>
          <div>
            <Image className="mx-40 rounded-2xl"  width={500} height={500} src="/farmer.jpg" alt='image'/>
          </div>
      </div>
    </div>
  );
}