import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Store from './components/Store';
import About from './components/About/About';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  return (
    <CartProvider>
      <Router>
        <Header onCartOpen={() => setCartVisible(true)} />
        <Cart show={cartVisible} handleClose={() => setCartVisible(false)} />
        <Container className="py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
