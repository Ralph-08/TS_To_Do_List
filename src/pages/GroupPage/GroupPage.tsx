import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./GroupPage.scss";

export default function GroupPage() {
  const { groupName } = useParams();

  return (
    <>
      <header className="header">
        <NavBar />;
      </header>
      <main className="main">
        <h1 className="main__header">{groupName?.toUpperCase()}</h1>
      </main>
    </>
  );
}
