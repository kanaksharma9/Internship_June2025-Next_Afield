'use client'
import { Router } from "next/router";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db, auth } from '../../lib/firebase';
import { useEffect, useState } from 'react';


export default function EventPage({ params, searchParams }) {
    const router = useRouter();
    const { eventId } = router.query;
    const [event, setEvent] = useState(null);
    const [isAttending, setIsAttending] = useState(false);

   useEffect(() => {
    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

   const fetchEvent = async () => {
    const docRef = doc(db, 'events', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const eventData = docSnap.data();
      setEvent(eventData);
      setIsAttending(eventData.attendees.includes(auth.currentUser.uid));
    }
  };

  const handleRSVP = async () => {
    const eventRef = doc(db, 'events', id);
    
    if (isAttending) {
      await updateDoc(eventRef, {
        attendees: arrayRemove(auth.currentUser.uid)
      });
    } else {
      await updateDoc(eventRef, {
        attendees: arrayUnion(auth.currentUser.uid)
      });
    }
    
    setIsAttending(!isAttending);
  };

   if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <button onClick={handleRSVP}>
        {isAttending ? 'Cancel RSVP' : 'RSVP'}
      </button>
    </div>
  );
}