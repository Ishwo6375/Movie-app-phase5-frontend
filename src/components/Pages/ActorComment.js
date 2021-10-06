import React from 'react'



function ActorComment( {comments, id}) {
    const showComments = 
    comments && comments.map((comment) => {
        return <div key={id} className="review-container">
             <h3 ><span>Username:</span> {comment.username}</h3>
            <h4>{comment.comment}</h4>
            <p>{comment.created_at} minutes ago..</p>
        </div>
    });


    return (
        <>
        <h2 className="span-13">Comments</h2>
        <div>
            { showComments }
        </div>
        </>
    )
}

export default ActorComment
