import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./config/dbConnect.js";
import authRoutes from "./routes/auth.route.js";

const port = process.env.PORT || 8000;
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true })); //cors for to allow fronted requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
