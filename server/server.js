require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const searchRoutes = require("./routes/searchRoutes");
const authRoute = require("./routes/authRoute");

app.use("/", searchRoutes);
app.use("/auth", authRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
