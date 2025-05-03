import React from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap';
import './List.css';
export default function List({ name, place, specPlace }) {
    return (
        //  <li className='tour-item'>
        //     <span className='tour-date'>{props.name}</span>
        //     <span className='tour-place'>{props.place}</span>
        //     <span className='tour-spec-place'>{props.specPlace}</span>
        //     <button class="buy-btn">BUY TICKETS</button>
        //  </li>

        <ListGroup.Item className="mb-2">
            <Row className="align-items-center tour-item">
                <Col xs={2}><strong>{name}</strong></Col>
                <Col xs={3}>{place}</Col>
                <Col xs={5}>{specPlace}</Col>
                <Col xs={2}>
                    <Button className="buy-btn" size="sm">Buy Tickets</Button>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}
