import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, body, author };

    // Simulating an API call (Replace with actual API request)
    const response = await axios.post("http://localhost:5000/test/create-post", newPost)
    console.log("Post created:", response.data);

    // Reset form fields after submission
    setTitle("");
    setBody("");
    setAuthor("");

    navigate("/");
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default Create;
