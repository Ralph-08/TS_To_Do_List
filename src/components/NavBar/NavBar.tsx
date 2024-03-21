import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="nav__placeholder"></div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        fixed="top"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav__link">
              FM
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="nav__route">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <NavDropdown title="Ministerios" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/varones" className="nav__route">
                    Varones
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/dorcas" className="nav__route">
                    Dorcas
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/parejas" className="nav__route">
                    Parejas
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/jovenes" className="nav__route">
                    Jovenes
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/juniors" className="nav__route">
                    Juniors
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/corderitos" className="nav__route">
                    Corderitos
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/alabanza" className="nav__route">
                    Alabanza
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
