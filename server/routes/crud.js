import pool from "../database.js";
import { Router } from "express";

const router = Router();

router.post("/create-post", async (req, res)=>{
    try{
        const {title, author, body} = req.body;

        const newUser = await pool.query("INSERT INTO post (title, author, body) VALUES ($1, $2, $3) RETURNING *", [title, author, body])

        res.send(newUser.rows);
    }catch(error){
        console.log(error)
    }
})

router.delete("/delete-post/:id", async (req, res) => {
    try{
        const {id} = req.params;
        await pool.query("DELETE FROM post WHERE id = $1", [id])
        res.json({message: "Post deleted successfully! "})
    }catch(error){
        console.error(error);
        res.status(500).send("Error deleting post")
    }
})

router.put("/update-post/:id", async (req, res) => {
    try {
      const { title, body, author } = req.body; // Get updated data from the request body
      const { id } = req.params; // Get the post ID from the URL
  
      // SQL query to update the post
      const result = await pool.query(
        "UPDATE post SET title = $1, body = $2, author = $3 WHERE id = $4 RETURNING *",
        [title, body, author, id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).send("Post not found.");
      }
  
      res.send(result.rows[0]); // Return updated post
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).send("Server error");
    }
  });

router.get("/get-post", async (req, res) => {
    try{
        const posts = await pool.query("SELECT * FROM post")

        res.send(posts.rows)
    }catch(error){
        console.log(error)
    }
})

router.get("/read-post/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      // Query to fetch the post by ID
      const result = await pool.query("SELECT * FROM post WHERE id = $1", [id]);
  
      if (result.rows.length === 0) {
        return res.status(404).send("Post not found");
      }
  
      res.send(result.rows[0]);  // Send the post data
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).send("Server error");
    }
  });

export default router;