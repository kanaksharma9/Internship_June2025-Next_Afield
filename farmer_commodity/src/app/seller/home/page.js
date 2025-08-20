import React from 'react'
import Image from 'next/image'

function Page (){
  return (
    <div>
      <div className='flex justify-between m-50'>
        <div className='order-1 my-20'>
            <p>dhejkqslmbhnedgvehfhvbjdkcdbhcwnskmkxdb</p>
        </div>
        <div className=' order-2 '>
              <Image 
              width={500}
              height={500}
              src= '/farmer.jpg'
              alt=' image'/>
        </div>
      </div>
      <div className='flex justify-between m-50'>
        <div className='order-1 my-20'>
            <p>dhejkqslmbhnedgvehfhvbjdkcdbhcwnskmkxdb</p>
        </div>
        <div className=' order-2 '>
              <Image 
              width={500}
              height={500}
              src= '/farmer.jpg'
              alt=' image'/>
        </div>
      </div>
    </div>
  )
}

export default Page

