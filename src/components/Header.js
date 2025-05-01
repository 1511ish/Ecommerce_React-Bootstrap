import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between px-5">
                <Nav>
                    <Nav.Link as={Link} to="/" className="text-white">HOME</Nav.Link>
                    <Nav.Link as={Link} to="/store" className="text-white">STORE</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="text-white">ABOUT</Nav.Link>
                </Nav>
                <Button variant="outline-info">
                    cart <sup>0</sup>
                </Button>
            </Navbar>

            <h1 style={{ background: 'grey', color: 'white', textAlign: 'center', padding: '20px' }}>
                The Generics
            </h1>
        </header>
    );
};

export default Header;