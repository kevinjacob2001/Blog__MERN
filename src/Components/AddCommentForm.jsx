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
      <h3>Add a Comment.</h3>
      <label>
        Name:
        <input type="text" value={username} onChange={(e) => setusername(e.target.value)}/>
      </label>
      </div>

      <div>
      <label>
          Comments:
        <textarea rows="4" cols="50" value={commentText} onChange={(e) => setCommentText(e.target.value)}/>
      </label>
      </div>
      <button onClick={()=>addComment()}>Add Comment.</button>
   
    </div>
  );
};

export default AddCommentForm;
