const { Schema, model } = require("mongoose");

const CommentSchema = Schema(
  {
    body: { type: Schema.Types.String, required: true },
    author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    likes: { type: Schema.Types.Number, required: true },
    replies: { type: [Schema.Types.ObjectId], ref: "Comment" },
  },
  { timestamps: true }
);

const Comment = model("Comment", CommentSchema);

module.exports = Comment;
