const axios = require("axios");
const jwt = require("jsonwebtoken");

const searchiTunes = async (req, res) => {
  try {
    const { term, media } = req.query;
    const response = await axios.get("https://itunes.apple.com/search", {
      params: { term, media, limit: 10 },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Received Token:", authHeader); // Debug log

  if (!authHeader) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1]; // Extract token from "Bearer TOKEN"

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Store token for future use
    console.log("Token verified:", verified); // Debug log
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message); // Debug log
    res.status(400).json({ error: "Invalid token" });
  }
};
module.exports = { searchiTunes, authenticate };
