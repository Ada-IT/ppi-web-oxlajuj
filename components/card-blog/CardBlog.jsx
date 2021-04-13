import React from "react";
import { Card } from "react-bootstrap";
import style from "./CardBlog.module.css";

const CardBlog = ({ img, title, text, date, body, button }) => {
  return (
    <Card className={style.cardBlog}>
      <div className={style.imgBlog}>
        <Card.Img variant='top' src={img} style={{ width: "80%" }} />
      </div>
      <Card.Body>
        <Card.Title className={style.titleBlog}>{title}</Card.Title>
        <Card.Text>{date}</Card.Text>
        <Card.Text>{text}</Card.Text>
        <Card.Text>{body}</Card.Text>
        <a className={style.blogButton} onClick={button}>
          VER MÁS
        </a>
      </Card.Body>
    </Card>
  );
};

export default CardBlog;
