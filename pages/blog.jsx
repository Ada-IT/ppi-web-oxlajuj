import { useEffect, useState } from 'react';
import Hero from "../components/hero/Hero";
import { fetchBlogEntries } from './api/ApiContentful';

const Blog = () => {

  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    const entries = await fetchBlogEntries();
    setPosts(entries);
  }

  useEffect(() => {
    getPost();
  }, [])


  return (
    <>
      <Hero />
      <ul>
        {posts.map(post => {
          return (
            <>
              <li>titulo:{post.title}</li>
              <li>body: {post.body.content.value}</li>
              <img src={post.image.imageUrl} />
            </>
          )
        })
        }
      </ul>
    </>
  );
};

export default Blog;
