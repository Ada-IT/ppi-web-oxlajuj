import { Media, Row } from "react-bootstrap";

const CardBlog = ({ img, title, text, date, body }) => {
  return (
    <Media>
      <img width={300} className='mr-3' src={img} alt='img-blog1' />
      <Media.Body>
        <h5>{title}</h5>
        <p>{text}</p>
        <p>{date}</p>
        <p>{body}</p>
      </Media.Body>
    </Media>
  );
};

export default CardBlog;
