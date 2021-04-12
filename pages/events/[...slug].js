import { useRouter } from 'next/router';

function FilteredEventsPage() {
  const { query } = useRouter();

  return <h1>Filtered Events</h1>;
}

export default FilteredEventsPage;
