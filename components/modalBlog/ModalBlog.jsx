import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import style from "./ModalBlog.module.css";

const ModalBlog = ({ show, handleClose, post }) => {
  const renderNode = (node) => {
    switch (node.nodeType) {
      case 'paragraph':
        return <p>{node.content.map(renderNode)}</p>;
      case 'heading-1':
        return <h1>{node.content.map(renderNode)}</h1>;
      case 'heading-2':
        return <h2>{node.content.map(renderNode)}</h2>;
      case 'bold':
        return <strong>{node.value}</strong>;
      case 'text':
        return node.marks.some(mark => mark.type === 'bold') ? (
          <strong>{node.value}</strong>
        ) : (
          node.value
        );
      case 'hyperlink':
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {node.content.map(renderNode)}
          </a>
        );
      default:
        return null;
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className={style.titleModalblog}>{post.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{post.publishedDate}</Modal.Body>
      <img src={post.image.imageUrl} />
      <Modal.Body>{post.description}</Modal.Body>
      <Modal.Body>
        {post.body.content.map(renderNode)}
      </Modal.Body>
      <Modal.Footer>
        <a onClick={handleClose} className={style.botModalblog}>
          Cerrar
        </a>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalBlog;
