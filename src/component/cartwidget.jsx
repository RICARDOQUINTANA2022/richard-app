import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function CartWidget() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="./logo192.png" alt="" width="50px" /></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default CartWidget;