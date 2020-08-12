import React, { useState } from "react";

const AddCommentForm = ({articleName,setArticleInfo}) => {
  const [username, setusername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`,{method: "post",body:JSON.stringify({username,text:commentText }),
headers:{"Content-Type":"application/json"}
})
const body=await result.json();
    setArticleInfo(body)
    setusername("");
    setCommentText("");
}
  return (
    <div id="add-comment-form">

     <div>
      <h2 style={{textAlign:"center"}}>Add a Comment:</h2>
      <label>
        Name:
        <input type="text" placeholder="Enter your name:" value={username} onChange={(e) => setusername(e.target.value)}/>
      </label>
      </div>

      <div>
      <label>
          Comment:
        <textarea rows="4" placeholder="Enter the comment:" cols="50" value={commentText} onChange={(e) => setCommentText(e.target.value)}/>
      </label>
      </div>
      <button onClick={()=>addComment()}>Add Comment.</button>
   
    </div>
  );
};

export default AddCommentForm;
