import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.scss";
import videoBg from "../../assets/videos/videoBg.mp4";
import "./HomePage.scss";
import Button from "react-bootstrap/Button";
import CardItem from "../../components/CardItem/CardItem";
import varonesImg from "../../assets/images/varones.jpeg";
import dorcasImg from "../../assets/images/dorcas.webp";
import parejasImg from "../../assets/images/parejas.jpeg";
import jovenesImg from "../../assets/images/jovenes.jpeg";
import ninosImg from "../../assets/images/ninos.jpeg";
import alabanzaImg from "../../assets/images/alabanza.jpeg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <header className="header">
        <NavBar />
        <section className="hero">
          <video className="hero__bg" src={videoBg} autoPlay loop muted />
          <section className="hero__container">
            <h1 className="hero__header">
              BIENVENIDO A FUENTE DE MISERICORDIA!
            </h1>
            <p className="hero__p">El lugar que puedes llamar hogar.</p>
            <Button variant="primary" className="hero__btn">
              Aprender mas
            </Button>
          </section>
        </section>
      </header>

      <main className="main">
        <section className="info">
          <h1 className="info__header">CUANDO? </h1>
          <p className="info__p">
            <b>
              <em>Jueves:</em>
            </b>{" "}
            8:00PM
          </p>
          <p className="info__p">
            <b>
              <em>Domingo:</em>
            </b>{" "}
            12:00PM
          </p>
          <p className="info__address">
            10 Kitties Landing Rd Bluffton, SC 29910
          </p>
        </section>

        <section className="min">
          <h1 className="min__header">Ministerios: </h1>
          <ul className="cards">
            <li className="card">
              <Link to="/varones" className="card__link">
                {
                  <CardItem
                    image={varonesImg}
                    title="VARONES"
                    description="Bienvenido al grupo de varones"
                  />
                }
              </Link>
            </li>
            <li className="card">
              <Link to="grupos/dorcas" className="card__link">
                {
                  <CardItem
                    image={dorcasImg}
                    title="DORCAS"
                    description="Bienvenido al grupo de Dorcas"
                  />
                }
              </Link>
            </li>
            <li className="card">
              <Link to="grupos/parejas" className="card__link">
                {
                  <CardItem
                    image={parejasImg}
                    title="PAREJAS"
                    description="Bienvenido al grupo de parejas"
                  />
                }
              </Link>
            </li>
            <li className="card">
              <Link to="grupos/jovenes" className="card__link">
                {
                  <CardItem
                    image={jovenesImg}
                    title="JOVENES"
                    description="Bienvenido al grupo de jovenes"
                  />
                }
              </Link>
            </li>
            <li className="card">
              <Link to="grupos/kids" className="card__link">
                {
                  <CardItem
                    image={ninosImg}
                    title="KIDS"
                    description="Bienvenido al grupo de niños"
                  />
                }
              </Link>
            </li>
            <li className="card">
              <Link to="grupos/alabanza" className="card__link">
                {
                  <CardItem
                    image={alabanzaImg}
                    title="ALABANZA"
                    description="Bienvenido al grupo de alabanza"
                  />
                }
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
