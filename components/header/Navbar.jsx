import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg='black' expand='lg'>
        <Navbar.Brand href='#home'>
          <img style={{ width: "250px" }} src='./images/logo.png' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav inline>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#quienes-somos'>Quienes Somos?</Nav.Link>
            <Nav.Link href='#proyectos'>Proyectos</Nav.Link>
            <Nav.Link href='#investigacion'>Investigación</Nav.Link>
            <Nav.Link href='#publicaciones'>Publicaciones</Nav.Link>
            <Nav.Link href='#contacto '>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
