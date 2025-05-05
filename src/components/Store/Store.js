// Store.js
import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './store.css';



const Store = ({products}) => {
  const { addItem } = useContext(CartContext);

  return (
    <Container className="py-4">
      <Row className="g-4">
        {products.map((product, idx) => (
          <Col key={idx} md={6} className="text-center" >
            <Link to={`/product-detail/${idx}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h5>{product.title}</h5>
              <div style={{ overflow: 'hidden', width: '60%', margin: 'auto' }}>
                <Card.Img variant="top" src={product.imageUrl} className="zoom-image" />
              </div>
            </Link>
            <div className="d-flex justify-content-around align-items-center mt-2 px-4">
              <span className="fw-bold">${product.price.toFixed(2)}</span>
              <Button variant="info" size="sm" onClick={() => addItem(product)}>ADD TO CART</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
