import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Page (){
   const events = [
    { id: "1", name: "React Conference", img: '/events.jpg' },
    { id: "2", name: "Next.js Meetup", img: '/events.jpg' },
    { id: "3", name: "AI Summit" , img: '/events.jpg'},
    { id: "4", name: "AI Summit" , img: '/events.jpg'},
    { id: "5", name: "AI Summit" , img: '/events.jpg'},
    { id: "6", name: "AI Summit" , img: '/events.jpg'},
  ];

  return (
    <div className='columns-3 flex-row m-4 p-8'>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={{ pathname: `/events/${event.id}`, query: { eventName: event.name } }}>
              <Image width={400} height={400} src={event.img} alt='image'/>
              {event.name}
            </Link>
          </li>
        ))}
      </ul>
        </div>
  )
}

