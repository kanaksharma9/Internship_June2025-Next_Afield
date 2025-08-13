import React from 'react'
import Image from 'next/image'

function Page (){
  return (
    <div className='bg-amber-900 h-screen'>
      <div>
        <div className='h-auto bg-black '>
            <Image dir='ltr'
            className='ms-100'
            width={1000}
            height={1000}
            src= '/farmer.jpg'
            alt=' image'/>
        </div>
      </div>
    </div>
  )
}

export default Page
