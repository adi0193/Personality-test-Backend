const mongoose = require("mongoose");

const monggo_url = process.env.MONGO_URI;

mongoose
  .connect(monggo_url)
  .then(() => {
    console.log("mongodb connected..");
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);
  })
