import express from "express"
import test from "./routes/crud.js"
import bodyParser from "body-parser";
import env from "dotenv";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello there!")
})

app.use("/test", test)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});