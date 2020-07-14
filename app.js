const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const user = require('./routes/auth.routs');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRTING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((error) => {
    console.log("connection error", error.message);
  });
// app.get("/", (req, res) => res.send("api running"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/user', user);

app.listen(PORT, () => {
  console.log(`erver start on: ${PORT}`);
});
