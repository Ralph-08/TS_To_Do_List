import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.scss";
import videoBg from "../../assets/videos/videoBg.mp4";

import fdmVid from "../../assets/videos/fdm2.mp4";

import "./HomePage.scss";
import Button from "react-bootstrap/Button";
import CardItem from "../../components/CardItem/CardItem";
import varonesImg from "../../assets/images/varones.jpeg";
import dorcasImg from "../../assets/images/dorcas.webp";
import parejasImg from "../../assets/images/parejas.jpeg";
import jovenesImg from "../../assets/images/jovenes.jpeg";
import kidsImg from "../../assets/images/parvulos.jpg";
import juniorsImg from "../../assets/images/juniors.jpg";
import alabanzaImg from "../../assets/images/drums.jpg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <header className="header">
        <NavBar />
        <section className="hero">
          <video className="hero__bg" src={fdmVid} autoPlay loop muted />
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
            11:00AM
          </p>
          <p className="info__address">
            10 Kitties Landing Rd Bluffton, SC 29910
          </p>
        </section>

        <section className="min">
          <section className="min__container">
            <h2 className="min__header">Ministerios: </h2>
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
                      image={juniorsImg}
                      title="JUNIORS"
                      description="Bienvenido al grupo de juniors"
                    />
                  }
                </Link>
              </li>
              <li className="card">
                <Link to="grupos/kids" className="card__link">
                  {
                    <CardItem
                      image={kidsImg}
                      title="CORDERITOS"
                      description="Bienvenido al grupo de corderitos"
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
        </section>
      </main>
    </>
  );
}
