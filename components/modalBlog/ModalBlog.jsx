import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import style from "./ModalBlog.module.css";

const ModalBlog = ({ show, handleClose, post }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className={style.titleModalblog}>{post.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{post.publishedDate}</Modal.Body>
      <img src={post.image.imageUrl} />
      <Modal.Body>{post.description}</Modal.Body>
      <Modal.Body>{post.body.content[0].content[0].value}</Modal.Body>
      <Modal.Footer>
        <a onClick={handleClose} className={style.botModalblog}>
          Cerrar
        </a>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalBlog;
