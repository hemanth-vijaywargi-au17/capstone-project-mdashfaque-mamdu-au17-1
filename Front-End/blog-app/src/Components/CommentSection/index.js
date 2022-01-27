import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Comment from "./Comment";
import { actions } from "../../Redux";

function CommentSection({ comments, post_author, post_id }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.length !== 0) {
      let commentObj = {
        body: input,
        post_id: post_id,
        author_id: post_author._id,
        likes: 0,
        replies: [],
      };
      dispatch(actions.addComment(commentObj));
      setInput("")
    }
  };

  return (
    <div className="mt-4 mb-16 flex flex-col gap-2">
      <h2>Comments ({comments.length})</h2>
      <div className="flex items-center gap-2 border-2 border-solid border-x-0 border-t-0 border-gray-300 pb-4">
        <textarea
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          className="grow p-3 rounded"
          placeholder="...Add Comment"
        ></textarea>
        <button className="article-btn" onClick={handleAdd}>
          Comment
        </button>
      </div>
      {comments.map((comment) => {
        return (
          <Comment
            {...comment}
            key={comment._id}
            post_author_id={post_author._id}
            remove={() => {
              dispatch(
                actions.removeComment({
                  post_id: post_id,
                  comment_id: comment._id,
                })
              );
            }}
          />
        );
      })}
    </div>
  );
}

export default CommentSection;
