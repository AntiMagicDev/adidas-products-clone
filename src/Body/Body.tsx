import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function Body() {
  return (
    <Container style={{marginBottom: '24px', marginTop: '24px'}}> 
        <h2>Camisetas - Niño</h2>
        <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link eventKey="link-1" style={{color:'gray'}}>Ver Toda la Ropa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/home" style={{color:'gray'}}>Camisetas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2" style={{color:'gray'}}>Sueteres y Buzos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-3" style={{color:'gray'}}>Camisetas de Futbol</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-4" style={{color:'gray'}}>Shorts</Nav.Link>
        </Nav.Item>        
        </Nav>
    </Container>
  );
}

export default Body;