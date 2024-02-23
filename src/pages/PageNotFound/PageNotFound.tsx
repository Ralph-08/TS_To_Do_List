import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./PageNotFound.scss";
// import videoBg from "../bg-video.mp4";


export default function PageNotFound() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="page">
        <h1 className="page__header">Pagina no encontrada: 404</h1>
        <p>
          Regresar a <Link to="/">Home</Link>
        </p>
      </main>
    </>
  );
}
