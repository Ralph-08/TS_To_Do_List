import NavBar from "../../components/NavBar/NavBar";
import "./VaronesPage.scss";

export default function VaronesPage() {
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
      </body>
    </>
  );
}
