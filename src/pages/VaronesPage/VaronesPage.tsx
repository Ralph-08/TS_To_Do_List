import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./VaronesPage.scss";
import EventCard from "../../components/EventCard/EventCard";
import defaultProfilePic from "../../assets/images/default-profile.png";

export default function VaronesPage() {
  //   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //   const handleResize = () => setWindowWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);

  return (
    <>
      <header className="varones-header">
        <NavBar />
        <section className="hero">
          <h1 className="hero__header">Grupo de Varones</h1>
        </section>
      </header>
      <body className="varones-body">
        <section className="mission">
          <h2 className="mission__subheader">ESTADO DE LA MISIÓN</h2>
          <p className="mission__p">
            Nuestro Ministerio de Varones existe para fomentar el crecimiento
            espiritual, brindar apoyo y responsabilidad, y equipar a los hombres
            para servir a sus familias, iglesia y comunidad con el amor de Dios.
          </p>
        </section>

        <section className="varones-events">
          <h2 className="events__subheader">EVENTOS Y ACTIVIDADES</h2>
          <section className="events">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </section>
        </section>

        <section className="leader">
          <h2 className="leader__subheader">LIDER DE MINISTERIO</h2>
          <section className="leader__card">
            <img
              className="leader__img"
              src={defaultProfilePic}
              alt="profile picture"
            />
            <h3 className="leader__name">Rafael Ramos</h3>
            <a href="tel:843-227-9692" className="leader__phone">
              (843) 227-9692
            </a>
          </section>
        </section>
      </body>
    </>
  );
}
