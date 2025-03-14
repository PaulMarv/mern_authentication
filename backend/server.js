import express from "express";
import { connectDB } from "./config/dbConnect.js";

const port = process.env.PORT || 8000;
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});

