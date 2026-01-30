console.log("🔥 BACKEND ENTRY FILE RUNNING 🔥");

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

// Models (⚠️ paths MUST match folder names exactly)
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const User = require("./model/UserModel");

const app = express();

// ✅ Render provides PORT automatically
const PORT = process.env.PORT || 10000;

// ---------------- MIDDLEWARE ----------------
app.use(cors());
app.use(express.json()); // body-parser NOT needed anymore

// ---------------- ROUTES ----------------

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ---------------- SIGNUP ----------------
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup successful 🎉",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------------- HOLDINGS ----------------
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find();
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------- POSITIONS ----------------
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find();
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------- ORDERS ----------------
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();

    res.status(201).json({ message: "Order saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------- DB + SERVER ----------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
