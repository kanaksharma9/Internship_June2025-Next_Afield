
"use client";

import Link from 'next/link';
import "./globals.css";
import Image from 'next/image';

export default function Page() {
  return (
    < div className='h-screen bg-blue-200'>
      <div className='bg-blue-900 flex justify-between  text-white h-15 p-4'>
          <h3 className='order-1 text-2xl'>MarketPlace </h3>
          <Link className='order-3' href='/signin'> 
              <button className='rounded shadow bg-cyan-300 p-2  text-1.5xl hover:bg-sky-700'>Sign/Login</button>
          </Link>
      </div>
      <div className='flex space-x-8 m-36 '>
          <div>
            <p className='text-1xl my-24 font-sans font-bold'>kejdhghwjqkl;wqkjhgvfwdhbxskmlxjnhbvcgxfvhbjnkjhg <br/>
            ytfrdesrdtfyguhijokpkjihukygjchb</p>
          </div>
          <div>
            <Image className="mx-40 rounded-2xl"  width={500} height={500} src="/farmer.jpg" alt='image'/>
          </div>
      </div>
    </div>
  );
}