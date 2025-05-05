// import React, { useState } from 'react';

// export default function Contact() {
//     const [name, setName] = useState("");
//     const [mail, setMail] = useState("");
//     const [phone, setPhone] = useState("");

//     const onSubmit = (e) => {
//         e.preventDefault();
//         if (!name || !mail || !phone) {
//             alert("All fields are required!");
//             return;
//         }
//         console.log("name: ", name);
//         console.log("mail: ", mail);
//         console.log("phone: ", phone);

//         setName("");
//         setMail("");
//         setPhone("");
//     }

//     return (
//         <section id="contact">
//             <div>
//                 <h2>Contact Us</h2>
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <label htmlFor="name">Name: </label>
//                         <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
//                     </div>
//                     <div>
//                         <label htmlFor="email">Email Id: </label>
//                         <input type="email" id='email' value={mail} onChange={(e) => setMail(e.target.value)} />
//                     </div>
//                     <div>
//                         <label htmlFor="phone">Phone No: </label>
//                         <input type="tel" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
//                     </div>

//                     <button>Submit</button>
//                 </form>
//             </div>
//         </section>
//     );
// }







import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !mail || !phone) {
      setError("All fields are required!");
      return;
    }
    setError("");
    console.log("name: ", name);
    console.log("mail: ", mail);
    console.log("phone: ", phone);
  }

  return (
    <>
      <h2 className="mb-3">Contact Us</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={onSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <Form.Label column sm={2}>Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm={2}>Email:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Enter your email"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPhone">
          <Form.Label column sm={2}>Phone:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </>
  );
}
