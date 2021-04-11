import { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import { fetchBlogEntries } from "./api/ApiContentful";
import { Col, Row, Container } from "react-bootstrap";
import CardBlog from "../components/card-blog/CardBlog";
import ModalBlog from "../components/modalBlog/ModalBlog";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    const entries = await fetchBlogEntries();
    setPosts(entries);
  };
  useEffect(() => {
    getPost();
  }, []);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);



  return (
    <>
      <Hero />

      <Container fluid style={{ marginTop: '30px' }}>
        <Row>
          {posts.map((post) => {
            console.log("post", post);
            return (
              <Col xs={12} sm={6} md={4} lg={4}>
                <CardBlog
                  title={post.title}
                  text={post.description}
                  img={post.image.imageUrl}
                  date={post.publishedDate}
                  body={post.body.content[0].content[0].value}
                  button={handleShow}
                />
              </Col>
            );
          })}

        </Row>
      </Container>
      {show ? <ModalBlog show={show} handleClose={handleClose} /> : null}
    </>
  );
};

export default Blog;
