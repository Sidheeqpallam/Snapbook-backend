const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");

const app = express();
const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
};
app.use(cors(options));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// routes
app.use("/", require("./routes/user"));
app.use("/", require("./routes/post"));
app.use("/", require("./routes/upload"));

app.use("*", (req, res) => {
  res.status(404).json({ message: "Bad Requist." });
});

// database
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log("error occured", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
