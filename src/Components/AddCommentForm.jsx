import React, { useState } from "react";

const AddCommentForm = () => {
  const [username, setusername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`,{method: "post",body:JSON.stringify({username,text:commentText }),
headers:{
    "Content-Type":"application/json"
}})

  return (
    <div id="add-comment-form">
      <h3>Add a Comment.</h3>
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
      </label>
      <label>
        <textarea
          rows="4"
          cols="50"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
      <button>Add Comment.</button>
    </div>
  );
};
}
export default AddCommentForm;
