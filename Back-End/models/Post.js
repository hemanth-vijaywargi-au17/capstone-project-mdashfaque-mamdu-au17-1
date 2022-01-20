const { Schema, model } = require("mongoose");

const PostSchema = Schema(
  {
    title: { type: Schema.Types.String, required: true },
    summary: { type: Schema.Types.String },
    body: { type: Object, required: true },
    author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    likes: { type: Schema.Types.Number, required: true },
    thumbnailURL: { type: Schema.Types.String },
    tags: { type: [Schema.Types.String] },
    comments: { type: [Schema.Types.ObjectId], ref: "Comment" },
  },
  { timestamps: true }
);

const Post = model("Post", PostSchema);

module.exports = Post;
