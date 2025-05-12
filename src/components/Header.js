// Header.js
import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = ({ onCartOpen }) => {
  const location = useLocation();
  const isStorePage = location.pathname === '/store';
  const { items } = useContext(CartContext);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between px-5">
        <Nav>
          <Nav.Link as={Link} to="/" className="text-white">HOME</Nav.Link>
          <Nav.Link as={Link} to="/store" className="text-white">STORE</Nav.Link>
          <Nav.Link as={Link} to="/about" className="text-white">ABOUT</Nav.Link>
          <Nav.Link as={Link} to="/login" className="text-white">LOGIN</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-white">CONTACT US</Nav.Link>
        </Nav>
        {isStorePage && (
          <Button variant="outline-info" onClick={onCartOpen}>
            cart <sup>{cartCount}</sup>
          </Button>
        )}
      </Navbar>
      <h1 style={{ background: 'grey', color: 'white', textAlign: 'center', padding: '20px' }}>
        The Generics
      </h1>
    </header>
  );
};

export default Header;
