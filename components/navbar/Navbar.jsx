import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand='lg'>
        <Link href='/'>
          <div class='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <img style={{ width: "250px" }} src='./images/logo.png' />
          </div>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav inline>
            <Link href='/'>
              <a class='nav-link active' aria-current='page'>
                Home
              </a>
            </Link>
            <Link href='/quienes-somos'>
              <a class='nav-link'>Quienes Somos?</a>
            </Link>
            <Link href='/proyectos'>
              <a class='nav-link'>Proyectos</a>
            </Link>
            <Link href='/investigacion'>
              <a class='nav-link'>Investigación</a>
            </Link>
            <Link href='/publicaciones'>
              <a class='nav-link'>Publicaciones</a>
            </Link>
            <Link href='/contacto'>
              <a class='nav-link'>Contacto</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
