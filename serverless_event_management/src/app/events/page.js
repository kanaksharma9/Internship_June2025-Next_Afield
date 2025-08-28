import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import withAuth from '../../components/withAuth';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'upcoming', 'past'

   const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      
      let eventsQuery = query(collection(db, 'events'), orderBy('date', 'asc'));
      
      if (filter === 'upcoming') {
        eventsQuery = query(
          collection(db, 'events'), 
          where('date', '>=', new Date().toISOString().split('T')[0]),
          orderBy('date', 'asc')
        );
      } else if (filter === 'past') {
        eventsQuery = query(
          collection(db, 'events'), 
          where('date', '<', new Date().toISOString().split('T')[0]),
          orderBy('date', 'desc')
        );
      }
      
      const querySnapshot = await getDocs(eventsQuery);
      const eventsData = [];
      
      querySnapshot.forEach((doc) => {
        eventsData.push({ id: doc.id, ...doc.data() });
      });
      
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  }, [filter]); // Add filter as a dependency

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]); // Now fetchEvents is stable thanks to useCallback


  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Available Events</h1>
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-md ${
                filter === 'upcoming'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-4 py-2 rounded-md ${
                filter === 'past'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Past
            </button>
          </div>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600">
              {filter === 'upcoming' 
                ? 'No upcoming events available' 
                : filter === 'past'
                ? 'No past events'
                : 'No events available yet'
              }
            </h2>
            <p className="mt-4 text-gray-500">
              Check back later for new events or create your own!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={event.imageUrl || '/events.jpg'}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h2>
                  <p className="text-gray-600 mb-2">
                    <svg className="inline-block w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {formatDate(event.date)} {event.time && `at ${event.time}`}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <svg className="inline-block w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {event.location}
                  </p>
                  <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {event.attendeeCount || 0} attending
                      {event.maxAttendees && ` / ${event.maxAttendees} max`}
                    </span>
                    <Link
                      href={`/events/${event.id}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default withAuth(EventsPage);