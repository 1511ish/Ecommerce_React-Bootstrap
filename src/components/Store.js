// Store.js
import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const products = [
  { title: 'Album 1', price: 12.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
  { title: 'Album 2', price: 14.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
  { title: 'Album 3', price: 9.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
  { title: 'Album 4', price: 19.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' },
];

const Store = () => {
  const { addItem } = useContext(CartContext);

  return (
    <Container className="py-4">
      <Row className="g-4">
        {products.map((product, idx) => (
          <Col key={idx} md={6} className="text-center">
            <h5>{product.title}</h5>
            <Card.Img variant="top" src={product.imageUrl} style={{ width: '60%', height: 'auto' }} />
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
