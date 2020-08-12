import React from "react";

const UpvotesSection = () => {

const upvoteArticle=async()=>{
const result=await fetch(`/api/articles/${articleName}/upvote`,{method:"POST"})
}

  return (
    <div id="upvotes-section">
      <button onClick={}>Add Upvote!</button>
      <p>This post has been upvoted {articleInfo.upvotes} times.</p>
    </div>
  );
};

export default UpvotesSection;
