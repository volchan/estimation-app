const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const redis = require("redis");
const morgan = require("morgan");

const keys = require("./keys");

// Express App Setup
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan(":method :url :status :response-time"));

// Redis Client Setup
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

const redisPublisher = redisClient.duplicate();

// Express Route Handlers
app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(5000, err => {
  console.log("Api listening on port 5000");
});
