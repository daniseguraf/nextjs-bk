import { useRef } from 'react';
import Button from '../ui/button';
import classes from './eventSearch.module.css';

function EventSearch({ submit }) {
  const refYear = useRef();
  const refMonth = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    submit({ year: refYear.current.value, month: refMonth.current.value });
  };

  const months = [
    { month: 'Ene', value: '1' },
    { month: 'Feb', value: '2' },
    { month: 'Mar', value: '3' },
    { month: 'Abr', value: '4' },
    { month: 'May', value: '5' },
    { month: 'Jun', value: '6' },
    { month: 'Jul', value: '7' },
    { month: 'Ago', value: '8' },
    { month: 'Set', value: '9' },
    { month: 'Oct', value: '10' },
    { month: 'Nov', value: '11' },
    { month: 'Dic', value: '12' },
  ];

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={refYear}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={refMonth}>
            {months.map((el) => (
              <option key={el.value} value={el.value}>
                {el.month}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit">Find Events</Button>
      </div>
    </form>
  );
}

export default EventSearch;
