const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./model/Employee");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/userdata")
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await EmployeeModel.findOne({ email });

        if (user) {
            if (user.password === password) {
                res.json("success");
            } else {
                res.json("Password incorrect");
            }
        } else {
            res.json("No user exists");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/register", async (req, res) => {
    try {
        const { email, name, password } = req.body;

        // Optional: Validate required fields
        if (!email || !name || !password) {
            return res.status(400).json({ error: "All fields are required: email, name, and password." });
        }

        // Create new user
        const newUser = await EmployeeModel.create({ email, name, password });
        console.log("registered user",newUser);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Server listening
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

