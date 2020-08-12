import React,{useState} from "react";

const AddCommentForm = () => {

    const [username,setusername]=useState("")
    const [commentText,setCommentText]=useState("")

  return (
    <div id="add-comment-form">
      <h3>Add a Comment.</h3>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        <textarea rows="4" cols="50" />
      </label>
      <button>Add Comment.</button>
    </div>
  );
};

export default AddCommentForm;
