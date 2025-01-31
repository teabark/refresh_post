import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, title: initialTitle, author: initialAuthor, body: initialBody } = location.state;

  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const [author, setAuthor] = useState(initialAuthor);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/test/update-post/${id}`, { title, body, author });
      navigate("/");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default Edit;
