import "./EventCard.scss";

interface EventCardProps {
  month: string;
  day: string;
  title: string;
  desc: string;
  time: string;
  location: string;
}

export default function EventCard({
  month,
  day,
  title,
  desc,
  time,
  location,
}: EventCardProps) {
  return (
    <section className="event-card">
      <section className="event-card-top">
        <p className="event-card__month">{month}</p>
        <p className="event-card__day">{day}</p>
      </section>
      <section className="event-card-middle">
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__desc">{desc}</p>
      </section>
      <section className="event-card-bottom">
        <p className="event-card__info">
          <b>HORA: </b>
          {time}
        </p>
        <p className="event-card__info">
          <b>LUGAR: </b>
          {location}
        </p>
      </section>
    </section>
  );
}
