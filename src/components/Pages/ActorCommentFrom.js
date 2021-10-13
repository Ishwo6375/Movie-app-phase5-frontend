import React, { useState } from "react";

function ActorCommentFrom() {
  const baseURL = "https://phase-5-movie-app-backend.herokuapp.com/";

  const [actorComment, setActorComment] = useState({
    comment: "",
    username: "",
    actor_id: "",
  });

  function onHandleChange(e) {
    setActorComment({ ...actorComment, [e.target.name]: e.target.value });
  }

  function onsubmitAddComment(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: actorComment.comment,
        username: actorComment.username,
        actor_id: actorComment.actor_id,
      }),
    };

    fetch(`${baseURL}/comments`, config)
      .then((res) => res.json())
      .then((newComment) => {
        const newComments = [actorComment, newComment];
        setActorComment(newComments);
      });
  }

  return (
    <div className="rev-container">
      <div className="rev-content">
        <form>
          <h2 className="span-6">Add Comments</h2>

          <div>
            <input
              className="id"
              type="text"
              placeholder="Enter your username"
              name="username"
              value={actorComment.username}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <textarea
              cols="10"
              rows="7"
              className="id"
              type="text"
              placeholder="Write Comment here..."
              name="comment"
              value={actorComment.comment}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Enter actor id"
              name="actor_id"
              value={actorComment.actor_id}
              onChange={onHandleChange}
            />
          </div>

          <br />
          <button onClick={onsubmitAddComment} className="btn-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ActorCommentFrom;
