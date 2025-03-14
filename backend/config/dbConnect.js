import mongoose from "mongoose";

const db = process.env.MONGO_URI;

export const connectDB = async () => {
    try {
      await mongoose.connect(db);
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection error:", error.message);
      process.exit(1);
    }
  };