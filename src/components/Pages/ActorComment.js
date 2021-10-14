import React from "react";
import { Link } from "react-router-dom";

function ActorComment({ comments, id }) {
  const showComments =
    comments &&
    comments.map((comment) => {
      return (
        <div key={id} className="review-container">
          <h3>
            <span>Username:</span> {comment.username}
          </h3>
          <h4>{comment.comment}</h4>
          <p>{comment.created_at} minutes ago..</p>
        </div>
      );
    });

  return (
    <>
      <Link className="review-link" to={"/comments"}>
        <button className="comment-btn">Add comments</button>
      </Link>
      <h2 className="span-13">User Comments</h2>
      <div>{showComments}</div>
    </>
  );
}

export default ActorComment;
