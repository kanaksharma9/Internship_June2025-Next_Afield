'use client'
import { use } from "react";
import Image from "next/image";

export default function EventPage({ params, searchParams }) {
  const { eventId } = use(params);
  const { eventName } = use(searchParams);

  return (
    <div className="mx-140 my-30">
        <h1 className="mx-40">{eventName}</h1>
        <Image width={400} height={400} src='/events.jpg' alt='image'/>
  </div>
);
}