const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const app = express();
const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", require("./routes/user"));

// database
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log("error occured", err));

app.listen(PORT, () => console.log(`Server is runnint on port: ${PORT}`));
