import React from "react";

import ArticleList from "../Components/ArticleList";
import articleContent from "./article-content";

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articleContent} />
    </>
  );
};

export default ArticlesListPage;
