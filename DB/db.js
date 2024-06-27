require("dotenv").config();

const mongoose = require("mongoose");
const connectionUrl = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(connectionUrl, {});
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
