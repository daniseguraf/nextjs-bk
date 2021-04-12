import Link from 'next/link';

function EventsPage() {
  // const clients = [
  //   { id: 'max', name: 'Maximilian' },
  //   {
  //     id: 'manu',
  //     name: 'Manuel',
  //   },
  // ];

  return (
    <div>
      <h1>All Events Page</h1>
      <p>(show all events)</p>
      {/* <ul>
        {clients.map((el) => (
          <li key={el.id}>
            <Link href={`/clients/${el.id}`}>{el.name}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default EventsPage;
