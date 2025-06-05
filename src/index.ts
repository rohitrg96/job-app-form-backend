import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import formRoutes from "./routes/form.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/forms", formRoutes);

mongoose
  .connect(process.env.MONGO_URI || "", { dbName: "formDB" })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
