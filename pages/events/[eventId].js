import { useRouter } from 'next/router';

function EventDetailPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Event {router.query.eventId}</h1>
    </div>
  );
}

export default EventDetailPage;
