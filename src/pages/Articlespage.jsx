import React from "react";
import articleContent from "./article-content";
import ArticleList from '../Components/ArticleList'

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) return <h1>Article doesnt exist!</h1>;

  const otherArticles=articleContent.filter((article)=>article.name!==name)

  return (
    <>
    
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h2 style={{textAlign:"center"}}>Other articles.</h2>
      <ArticleList articles={otherArticles}/>
    
    </>
  );
};

export default ArticlePage;
