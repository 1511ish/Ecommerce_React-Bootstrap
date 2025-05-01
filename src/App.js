import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Store from './components/Store';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container className="py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
