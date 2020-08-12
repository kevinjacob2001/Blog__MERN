import React from 'react';

const CommentsList=({comments})=>{
return(
comments.map((comment)=>{
    <div className="comment">
<h4>{comment.username}</h4>

    </div>
})
)
}

export default CommentsList;