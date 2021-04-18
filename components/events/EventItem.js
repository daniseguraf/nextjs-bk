import classes from './EventItem.module.css';
import Button from './../ui/button';
import DateIcon from './../icons/date-icon';
import AddressIcon from './../icons/address-icon';
import ArrowRightIcon from './../icons/arrow-right-icon';

const EventItem = ({ title, date, location, id, image }) => {
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>

          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>{' '}
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
