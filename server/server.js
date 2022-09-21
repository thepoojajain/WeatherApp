require("./db");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const routes = require("./routes/weather");

const server = express();
server.use(cors());
server.use(express.json());
server.use("/weather", routes);

server.listen(process.env.PORT || 8080, () => {
  console.log(`Server Started at ${process.env.PORT || 8080}`);
});
