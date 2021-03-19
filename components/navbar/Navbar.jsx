import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarComponent = () => {
  const router = useRouter();

  const isActive = (route) => {
    if (route === router.asPath) {
      return "active";
    }
  };

  return (
    <div className='container'>
      <Navbar expand='lg'>
        <Link href='/'>
          <a style={{ marginLeft: "-26px" }} className='navbar-brand'>
            <img style={{ width: "250px" }} src='./images/logo.png' />
          </a>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav>
            <Link href='/'>
              <a className={(isActive("/"), "nav-link")} aria-current='page'>
                Home
              </a>
            </Link>
            <Link href='/quienes-somos'>
              <a className={(isActive("/quienes-somos"), "nav-link")}>
                Quienes Somos?
              </a>
            </Link>
            <Link href='/proyectos'>
              <a className={(isActive("/proyectos"), "nav-link")}>Proyectos</a>
            </Link>
            <Link href='/investigacion'>
              <a className={(isActive("/investigacion"), "nav-link")}>
                Investigación
              </a>
            </Link>
            <Link href='/publicaciones'>
              <a className={(isActive("/publicaciones"), "nav-link")}>
                Publicaciones
              </a>
            </Link>
            <Link href='/contacto'>
              <a className={(isActive("/contacto"), "nav-link")}>Contacto</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;