import { Navbar, Button } from "react-bootstrap";

const TopHeader = () => {
  return (
    <Navbar bg='light'>
      <Navbar.Text>fundacionoxlaju@gmail.com</Navbar.Text>
      <Navbar.Collapse className='justify-content-end'>
        <Button variant='outline-info'>Donaciones</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopHeader;
