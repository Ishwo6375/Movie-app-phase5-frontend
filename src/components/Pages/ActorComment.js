import React from 'react'


function ActorComment( {comments, id}) {
    const showComments = 
    comments && comments.map((comment) => {
        return <div>
             <h5>{comment.username}</h5>
        </div>
    })
    return (
        <>
        <h2 className="span-5">Comments</h2>
        <div>
            { showComments }
        </div>
        </>
    )
}

export default ActorComment
