const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// App - to Invoke express
const app = express();

// Database - Connect to MongoDB -> We added the following configuration to avoid from deprecation errors that morgan throws on terminal.
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database Error => ", err));

// Middlewares - A section that will in the middle between Client(meeting-manager) and Server(meeting-manager-server)
app.use(cors());
app.use(morgan("dev")); // Enabling the developer mode for morgan. - To show endpoint in terminal.
app.use(bodyParser.json()); // To pass .json to make the server understand data and ready for usage.

// Endpoint
app.get("*", (req, res) => {
  res.json({
    data: "Successfully reached nodejs api for customer-meeting-tracker application",
  });
}); // It is a way to does not matter what endpoint is, any incoming request getting we will give required response.

// Server Port
const port = process.env.PORT || 8000; // In env file, the given port will be different because for developing purposes. In production it could be different in our scenario. Otherwise, as mentioned in code the default(8000) will be used.
app.listen(port, () => console.log(`The Server is running on ${port}.`)); // Listening the port with a logged message to observe.
