import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Contact from "./models/contact.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Lidhja me MongoDB u bë me sukses"))
  .catch((err) => console.error("❌ Gabim në lidhjen me MongoDB:", err));

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!email && !phone) {  // ← NDRYSHIMI KËTU
      return res.status(400).json({ message: "Ju lutem jepni email ose numrin e telefonit." });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.json({ message: "Mesazhi u dergua me sukses!" });
  } catch (error) {
    console.error("❌ Gabim gjatë ruajtjes:", error);
    res.status(500).json({ message: "Gabim gjatë ruajtjes së mesazhit." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Serveri po punon në portin ${PORT}`)
);