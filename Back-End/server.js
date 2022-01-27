// Dependencies
const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
require("dotenv").config();
const { resolve } = require("path");
const passportSetup = require("./passport.js");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/userRoutes");
const appRoutes = require("./routes/appRoutes");

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

app.use(express.json())

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/app", appRoutes);

// DB
const { dbConnect } = require("./db");
dbConnect();

// Statically Serving Build Folder
const buildFolderPath = resolve(__dirname, "../Front-End/blog-app/build");
app.use(express.static(buildFolderPath));

//React Router
app.get("*", (req, res) => {
  res.sendFile(`${buildFolderPath}/index.html`);
});

// Starting the express server
app.listen(PORT, () => {
  console.log(`Server Listening at PORT : ${PORT}`);
});
