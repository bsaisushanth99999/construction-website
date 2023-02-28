import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/Logo.jpg';

function NavBar(){
    return (
        <Navbar bg="light" variant="light" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} width="100" height="100" alt='VAYUPUTRA BUILDINGS' />  
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Call us @ : <a href="#login">+91-xxx-xxx-xxxx</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar;