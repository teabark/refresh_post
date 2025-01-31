import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Card = ({id, title, author, body}) => {
    const navigate = useNavigate();

    const truncateText = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    }

    const handleDelete = async () => {
        try {
          await axios.delete(`http://localhost:5000/test/delete-post/${id}`);
          window.location.reload();
        } catch (error) {
          console.error("Error deleting post:", error);
        }
      };

      const handleEdit = () => {
        navigate(`/edit/${id}`, { state: { id, title, author, body } });
      };

      const handleRead = () => {
        navigate(`/read/${id}`);
      }

  return (
    <div style={{border: "2px solid black", width: "80%", marginTop: "30px"}}>
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{truncateText(body, 150)}</p>

      <button onClick={handleRead} style={{ marginRight: "10px", backgroundColor: "green", color: "white" }}>
          View
        </button>
      <button onClick={handleEdit} style={{ marginRight: "10px", backgroundColor: "blue", color: "white" }}>
        Edit
      </button>
      <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>
        Delete
      </button>
      
    </div>
  </div>
  )
}

export default Card