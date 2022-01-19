const { Router } = require("express");
const userRoutes = Router();
const Post = require("../models/Post");
const User = require("../models/User");

userRoutes.post("/article/post", async (req, res) => {
  if (req.isAuthenticated()) {
    const postObj = await Post.create(req.body);
    await User.updateOne({ _id: postObj.author }, { $push: { createdPosts: postObj._id } });
    res.json(postObj)
  } else {
    res.json("Not logged in!");
  }
});

module.exports = userRoutes;
