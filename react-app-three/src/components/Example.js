import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Timer from './Timer';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log(' click is called ');
    setShow(true);
  };

  return (
    <>
      <Timer />
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>React Modal for your Rails App</Modal.Title>
        </Modal.Header>
        <Modal.Body>Yay Modal</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
