import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import Link from 'next/link';


export default function Dashboard() {
  const [createdEvents, setCreatedEvents] = useState([]);
  const [rsvpedEvents, setRsvpedEvents] = useState([]);

  useEffect(() => {
    fetchUserEvents();
  }, []);

  const fetchUserEvents = async () => {
    const createdQuery = query(
      collection(db, 'events'), 
      where('creatorId', '==', auth.currentUser.uid)
    );
    const createdSnapshot = await getDocs(createdQuery);
    setCreatedEvents(createdSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));


    const allEventsQuery = query(collection(db, 'events'));
    const allEventsSnapshot = await getDocs(allEventsQuery);
    const rsvped = allEventsSnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(event => event.attendees.includes(auth.currentUser.uid));
    
    setRsvpedEvents(rsvped);
  };

  return (
    <div>
      <h1>Your Dashboard</h1>
      
      <h2>Events You&apos;ve Created</h2>
      <Link href={'/events/create'}><button>Create a new Event</button></Link>
      {createdEvents.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
        </div>
      ))}
      
      <h2>Events You&apos;re Attending</h2>
      {rsvpedEvents.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
}