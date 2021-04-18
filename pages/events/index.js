import Link from 'next/link';
import { useRouter } from 'next/router';

import { getAllEvents } from './../../dummy-data';
import EventList from './../../components/events/EventList';
import EventSearch from './../../components/events/EventSearch';

function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  const handleSearch = (e) => {
    // console.log(e?.year);
    router.push(`/events/${e?.year}/${e?.month}`);
  };

  return (
    <>
      <h1>All Events Page</h1>
      <EventSearch submit={handleSearch} />
      <EventList items={events} />
    </>
  );
}

export default EventsPage;
