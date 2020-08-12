import React from "react";

import ArticleList from "../Components/ArticleList";
import articleContent from "./article-content";

const ArticlesListPage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" ,marginBottom:"50px"}}>Articles</h1>
      <hr style={{width:"50%",background:"black"}}></hr>
      <ArticleList articles={articleContent} />
    </>
  );
};

export default ArticlesListPage;
