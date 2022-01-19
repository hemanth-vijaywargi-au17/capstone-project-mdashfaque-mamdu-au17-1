const { Schema, model } = require("mongoose");

const CommentSchema = Schema(
  {
    body: { type: Schema.Types.String, required: true },
    author_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    likes: { type: Schema.Types.Number, required: true },
    replies: { type: [Schema.Types.ObjectId], ref: "Comment" },
    post_id: { type: [Schema.Types.ObjectId], ref: "Post" },
  },
  { timestamps: true }
);

const Comment = model("Comment", CommentSchema);

module.exports = Comment;
