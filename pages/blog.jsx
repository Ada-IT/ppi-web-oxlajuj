import { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import { fetchBlogEntries } from "./api/ApiContentful";
import { Col, Row } from "react-bootstrap";
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
      <Row>
        {posts.map((post) => {
          console.log("post", post);
          return (
            <div style={{ marginTop: "30px" }}>
              <Col xs={12} sm={12} md={6} lg={6}>
                <CardBlog
                  title={post.title}
                  text={post.description}
                  img={post.image.imageUrl}
                  date={post.publishedDate}
                  body={post.body.content[0].content[0].value}
                />
              </Col>
            </div>
          );
        })}
      </Row>
    </>
  );
};

export default Blog;
