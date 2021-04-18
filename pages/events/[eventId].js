import { useRouter } from 'next/router';
import { getEventById } from './../../dummy-data';

import EventSummary from './../../components/event-detail/event-summary';
import EventLogistics from './../../components/event-detail/event-logistics';
import EventContent from './../../components/event-detail/event-content';

function EventDetailPage() {
  const router = useRouter();
  // console.log(router.query.eventId);
  // const { title, description, location, date } = getEventById(
  //   router.query.eventId
  // );

  const data = getEventById(router.query.eventId);
  console.log(data);

  if (!data) {
    return <p>Not found</p>;
  }
  return (
    <>
      <EventSummary title={data.title} />
      <EventLogistics
        date={data.date}
        address={data?.location}
        image={data?.image}
        imageAlt={data?.title}
      />
      <EventContent>
        <p>{data.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
