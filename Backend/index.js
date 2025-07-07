// index.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/User.route.js";
import messageRoute from "./routes/Message.routes.js";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { app, server } from "./socketIO/server.js";

// For __dirname support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/user", userRoute);
app.use("/message", messageRoute);

// Serve frontend (in production mode)
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "Frontend", "dist");
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// ✅ Wrap async code properly
const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");

    server.listen(PORT, () => {
      console.log(`🚀 Server started on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
})();
