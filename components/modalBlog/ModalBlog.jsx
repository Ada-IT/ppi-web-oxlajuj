import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalBlog = ({ show, handleClose, post }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{post.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{post.publishedDate}</Modal.Body>
      <img src={post.image.imageUrl} />
      <Modal.Body>{post.description}</Modal.Body>
      <Modal.Body>{post.body.content[0].content[0].value}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalBlog;
