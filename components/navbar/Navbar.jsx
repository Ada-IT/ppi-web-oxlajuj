import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand='lg'>
        <Link href='/'>
          <a className='navbar-brand'>
            <img style={{ width: "250px" }} src='./images/logo.png' />
          </a>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav>
            <Link href='/'>
              <a className='nav-link active' aria-current='page'>
                Home
              </a>
            </Link>
            <Link href='/quienes-somos'>
              <a className='nav-link'>Quienes Somos?</a>
            </Link>
            <Link href='/proyectos'>
              <a className='nav-link'>Proyectos</a>
            </Link>
            <Link href='/investigacion'>
              <a className='nav-link'>Investigación</a>
            </Link>
            <Link href='/publicaciones'>
              <a className='nav-link'>Publicaciones</a>
            </Link>
            <Link href='/contacto'>
              <a className='nav-link'>Contacto</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;