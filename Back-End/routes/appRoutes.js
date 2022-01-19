const { Router } = require("express");
const appRoutes = Router();
const Post = require("../models/Post");

appRoutes.get("/getAllPosts", async (req, res) => {
  const allPosts = await Post.find({}).populate('author');
  res.json(allPosts);
});

module.exports = appRoutes;
