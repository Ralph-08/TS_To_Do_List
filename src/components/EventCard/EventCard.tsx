import "./EventCard.scss";

export default function EventCard() {
  return (
    <section className="event-card">
      <section className="event-card-top">
        <p className="event-card__month">ENERO</p>
        <p className="event-card__day">4</p>
      </section>
      <section className="event-card-middle">
        <h3 className="event-card__title">Junta de Varones</h3>
        <p className="event-card__desc">
          Vamos a tener una junta de varones para planear los actividades de ese
          año.
        </p>
      </section>
      <section className="event-card-bottom">
        <p className="event-card__info">
          <b>HORA: </b>7:00PM
        </p>
        <p className="event-card__info">
          <b>LUGAR: </b>En la iglesia
        </p>
      </section>
    </section>
  );
}
