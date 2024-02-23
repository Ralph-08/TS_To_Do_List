import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.scss";
import videoBg from "../../assets/videos/videoBg.mp4";
import "./HomePage.scss";
import Button from "react-bootstrap/Button";

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
    </>
  );
}
