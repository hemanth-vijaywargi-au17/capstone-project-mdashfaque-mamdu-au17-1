const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    name: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true },
    profilePicURL: { type: Schema.Types.String, required: true },
    createdPosts: { type: [Schema.Types.ObjectId], ref: "Post" },
    readingList: { type: [Schema.Types.ObjectId], ref: "Post" },
    likedPosts: { type: [Schema.Types.ObjectId], ref: "Post" },
    followers: { type: [Schema.Types.ObjectId], ref: "User" },
    following: { type: [Schema.Types.ObjectId], ref: "User" },
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

module.exports = User;
