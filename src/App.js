import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Store from './components/Store/Store';
import About from './components/About/About';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import ProductDetail from './components/ProductDetail';

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const products = [
    { title: 'Album 1', price: 12.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
    { title: 'Album 2', price: 14.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
    { title: 'Album 3', price: 9.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
    { title: 'Album 4', price: 19.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' },
  ];
  return (
    <CartProvider>
      <Router>
        <Header onCartOpen={() => setCartVisible(true)} />
        <Cart show={cartVisible} handleClose={() => setCartVisible(false)} />
        <Container className="py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store products={products}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/product-detail/:productId' element={<ProductDetail products={products}/>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
