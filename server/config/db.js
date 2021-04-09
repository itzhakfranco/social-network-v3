const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
//
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myapp", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Could not connect to MongoDB...");
  }
};

module.exports = connectDB;
