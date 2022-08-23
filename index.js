const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection Successful"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/server/auth", authRoute);
app.use("/server/users", userRoute);

app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});
