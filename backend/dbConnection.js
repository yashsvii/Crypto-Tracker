const mongoose = require("mongoose");
require("dotenv").config(); // Load .env variables

const uri = process.env.MONGODB_URI;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB CONNECTED SUCCESSFULLY");
    })
    .catch((err) => {
      console.error("DB CONNECTION FAILED:", err);
    });
}

module.exports = dbConnection;
