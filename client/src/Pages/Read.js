import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Read = () => {
  const { id } = useParams();  
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/test/read-post/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);  

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <h3>{post.author}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Read;
