import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartwidget';

function NavPricipal() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <CartWidget />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Promotions</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavPricipal;