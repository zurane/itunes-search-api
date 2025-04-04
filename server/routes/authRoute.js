const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// Temporary user database (for demo purposes)
const users = [{ id: 1, username: "admin", password: "password" }];

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received login request:", username, password); // Debug log

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    console.log("Invalid login attempt"); // Debug log
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  console.log("Generated Token:", token); // Debug log
  res.json({ token });
});

module.exports = router;
