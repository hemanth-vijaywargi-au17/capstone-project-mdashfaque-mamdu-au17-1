const { Router } = require("express");
const authRoutes = Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

// Google Login Route
authRoutes.get(
  "/google",
  passport.authenticate("google", {scope: ['openid', 'email', 'profile']})
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
  res.redirect(CLIENT_URL);
});

authRoutes.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "failure",
  });
});

authRoutes.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "success",
      user: req.user,
      cookies: req.cookies,
    });
  }
});



module.exports = authRoutes;
