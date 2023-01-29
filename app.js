const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnect = require("./database/dbConnect");
require("dotenv").config();
const reg = require("./authentication/register");
const log = require("./authentication/login");
const freeEndpoint = require("./controllers/authEndpoints");
const quiz = require("./controllers/quizEndpoint");
dbConnect();
// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hi");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(express.json());

app.use(reg);
app.use(log);
app.use(quiz);
app.use(freeEndpoint);

// external imports

app.listen(process.env.PORT || 8081, () =>
  console.log("listening on port 8081")
);
