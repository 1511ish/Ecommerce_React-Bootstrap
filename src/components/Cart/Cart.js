// // Cart.js
// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { Button, Modal, Table } from 'react-bootstrap';

// const Cart = ({ show, handleClose }) => {
//     const { items, totalAmount, removeItem } = useContext(CartContext);

//     return (
//         <Modal show={show} onHide={handleClose} centered>
//             <Modal.Header closeButton>
//                 <Modal.Title>CART</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Table striped bordered>
//                     <thead>
//                         <tr>
//                             <th>ITEM</th>
//                             <th>PRICE</th>
//                             <th>QUANTITY</th>
//                             <th>REMOVE</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {items.map(item => (
//                             <tr key={item.title}>
//                                 <td>{item.title}</td>
//                                 <td>${item.price.toFixed(2)}</td>
//                                 <td>{item.quantity}</td>
//                                 <td>
//                                     <Button variant="danger" size="sm" onClick={() => removeItem(item.title)}>REMOVE</Button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//                 <h5 className="text-end me-3">Total: ${totalAmount.toFixed(2)}</h5>
//                 <div className="text-end">
//                     <Button variant="info">PURCHASE</Button>
//                 </div>
//             </Modal.Body>
//         </Modal>
//     );
// };

// export default Cart;








import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button, Table } from 'react-bootstrap';
import './Cart.css';

const Cart = ({ show, handleClose }) => {
    const { items, totalAmount, removeItem } = useContext(CartContext);

    if (!show) return null;

    return (
        <div className="cart-sidebar-fixed">
            <div className="cart-header d-flex justify-content-between align-items-center p-3 border-bottom">
                <h5>CART</h5>
                <button className="btn btn-outline-dark btn-sm" onClick={handleClose}>X</button>
            </div>

            <div className="cart-body p-3">
                {items.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div class="cart-row cart-header">
                            <span class="cart-item cart-column">ITEM</span>
                            <span class="cart-price cart-column">PRICE</span>
                            <span class="cart-quantity cart-column">QUANTITY</span>
                        </div>
                        {items.map((item, index) => (
                            <div key={index} className="cart-row ">
                                <span class="cart-item cart-column">
                                    <img class="cart-img" src={item.imageUrl} alt={item.title} />
                                    <span>{item.title}</span>
                                </span>
                                <span class="cart-price cart-column">12.99</span>
                                <span class="cart-quantity cart-column">
                                    <input type="number" value={item.quantity} readOnly className="form-control form-control-sm w-30 me-2" />
                                    <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.title)}>REMOVE</button>
                                </span>
                            </div>
                        ))}
                        <div className="mt-3 text-end">
                            <h6>Total: ${totalAmount.toFixed(2)}</h6>
                            <Button variant="info">PURCHASE</Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;

