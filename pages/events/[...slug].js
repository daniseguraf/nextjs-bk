import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from './../../components/events/EventList';

function FilteredEventsPage() {
  const { query } = useRouter();

  if (!query.slug) {
    return <p className="center">loading...</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: +query.slug[0],
    month: +query.slug[1],
  });

  console.log(filteredEvents);
  return !filteredEvents || filteredEvents.length === 0 ? (
    <h1>No hay resultados</h1>
  ) : (
    <>
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
