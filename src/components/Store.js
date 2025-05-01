
// pages/Store.js
import { Row, Col, Card, Button } from 'react-bootstrap';
const products = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
]


const Store = () => {
  return (
    <Row className="g-4" style={{border: "2px solid red"}}>
      {products.map((product, idx) => (
        <Col key={idx} md={6} className="text-center" style={{border: "2px solid blue"}}>
          <h5>{product.title}</h5>
          <Card.Img variant="top" src={product.imageUrl} style={{ width: '60%', height: 'auto' }} />
          <div className="d-flex justify-content-around align-items-center mt-2 px-4">
            <span className="fw-bold">${product.price.toFixed(2)}</span>
            <Button variant="info" size="sm">ADD TO CART</Button>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Store;
