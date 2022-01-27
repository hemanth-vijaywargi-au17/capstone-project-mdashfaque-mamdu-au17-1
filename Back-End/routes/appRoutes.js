const { Router } = require("express");
const appRoutes = Router();
const Post = require("../models/Post");
const User = require("../models/User");

appRoutes.get("/getAllUsers", async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
});

appRoutes.get("/getAllPosts", async (req, res) => {
  const allPosts = await Post.find({}).populate('comments');
  res.json(allPosts);
});

appRoutes.post("/getPost", async (req, res) => {
  const { post_id } = req.body;
  const response = await Post.find({ _id: post_id }).populate('comments');
  if (response.length !== 0) {
    res.json(response[0]);
  } else {
    res.json({ error: true, message: "Post not found!" });
  }
});

module.exports = appRoutes;
