const { Router } = require("express");
const authRoutes = Router();
const passport = require("passport");
const User = require("../models/User");

let CLIENT_URL = "/";
if (process.env.NODE_ENV === "development") {
  CLIENT_URL = "http://localhost:3000";
}

// Google Login Route
authRoutes.get(
  "/google",
  passport.authenticate("google", { scope: ["openid", "email", "profile"] })
);

// Google Redirect Route (After Auth)
authRoutes.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// Logout Route
authRoutes.get("/logout", (req, res) => {
  req.logout();
  res.json({ error: false });
});

authRoutes.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "failure",
  });
});

authRoutes.get("/login/success", async (req, res) => {
  if (req.isAuthenticated() && req.user) {
    const dbResponse = await User.findById({ _id: req.user._id });
    res.status(200).json({
      error: false,
      message: "success",
      user: dbResponse,
    });
  } else {
    res.json({
      error: true,
      message: "User Not logged In!",
    });
  }
});

module.exports = authRoutes;
