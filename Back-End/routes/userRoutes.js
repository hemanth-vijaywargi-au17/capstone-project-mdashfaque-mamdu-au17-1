const { Router } = require("express");
const userRoutes = Router();
const Post = require("../models/Post");
const User = require("../models/User");

function Authenticate(req, res, next) {
  if (req.isAuthenticated() && req.user) {
    next();
  } else {
    res.json({ error: true, message: "Not logged in!" });
  }
}

userRoutes.use(Authenticate);

userRoutes.post("/article/post", async (req, res) => {
  const { _id } = await Post.create(req.body);
  const postObj = await Post.findById(_id).populate("author");
  await User.updateOne(
    { _id: req.user._id },
    { $push: { createdPosts: postObj._id } }
  );
  res.json(postObj);
});

userRoutes.post("/article/delete", async (req, res) => {
  try {
    let { post_id } = req.body;
    await User.updateOne(
      { _id: req.user._id },
      { $pull: { createdPosts: post_id } }
    );
    await Post.deleteOne({ _id: post_id });
    res.json({ error: false });
  } catch (err) {
    res.json({ error: true, errorObj: err });
  }
});

userRoutes.post("/article/like", async (req, res) => {
  try {
    let { post_id } = req.body;
    await User.findByIdAndUpdate(req.user._id, {
      $push: { likedPosts: post_id },
    });
    await Post.findByIdAndUpdate(post_id, { $inc: { likes: 1 } });
    res.json({ error: false });
  } catch (err) {
    res.json({ error: true, errorObj: err });
  }
});

userRoutes.post("/article/removeLike", async (req, res) => {
  try {
    let { post_id } = req.body;
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { likedPosts: post_id },
    });
    await Post.findByIdAndUpdate(post_id, { $inc: { likes: -1 } });
    res.json({ error: false });
  } catch (err) {
    res.json({ error: true, errorObj: err });
  }
});

module.exports = userRoutes;
