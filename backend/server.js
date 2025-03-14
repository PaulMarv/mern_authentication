import express from "express";
import { connectDB } from "./config/dbConnect.js";
import authRoutes from "./routes/auth.route.js";

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes); 

app.listen(port, () => {
    connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});

