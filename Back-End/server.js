// Dependencies
const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
require("dotenv").config();
const passportSetup = require("./passport.js");
const authRoutes = require("./routes/auth");

// Creating the express server
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cookieSession({
    name: "session",
    secret: process.env.COOKIE_SECRET,
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

// DB
const { dbConnect } = require("./db");
dbConnect();

// Starting the express server
app.listen(PORT, () => {
  console.log(`Server Listening at PORT : ${PORT}`);
});
