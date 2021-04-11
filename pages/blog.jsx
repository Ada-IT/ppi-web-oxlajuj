import { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import { fetchBlogEntries } from "./api/ApiContentful";
import { Col, Row, Container } from "react-bootstrap";
import CardBlog from "../components/card-blog/CardBlog";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    const entries = await fetchBlogEntries();
    setPosts(entries);
  };
  useEffect(() => {
    getPost();
  }, []);

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
                />
              </Col>
            );
          })}

        </Row>
      </Container>

    </>
  );
};

export default Blog;
