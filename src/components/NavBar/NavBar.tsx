import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.scss";

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
          <Navbar.Brand href="#home">Fuente De Misericordia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <NavDropdown title="Ministerios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Varones</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Dorcas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Parejas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Jovenes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ninos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Alabanza</NavDropdown.Item>
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
