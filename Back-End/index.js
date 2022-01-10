// Dependencies
const express = require("express");
require("dotenv").config();

// Creating the express server
const app = express();
const PORT = process.env.PORT || 5000;

// Starting the express server
app.listen(PORT, () => {
  console.log(`Server Listening at PORT : ${PORT}`);
});
