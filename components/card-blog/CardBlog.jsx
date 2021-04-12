import React, { useState } from "react";
import { Media, Row, Card, Button } from "react-bootstrap";
import style from "./CardBlog.module.css";

const CardBlog = ({ img, title, text, date, body, button }) => {

  return (
    <Card>
      <Card.Img variant="top" src={img} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{date}</Card.Text>
        <Card.Text>
          {text}
        </Card.Text>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary" onClick={button}>VER MÁS</Button>
      </Card.Body>
    </Card>
  );
};

export default CardBlog;
