import React, { useState, useEffect } from "react";
import articleContent from "./article-content";
import ArticleList from "../Components/ArticleList";
import NotFoundPage from "./NotFound";
import CommentsList from '../Components/CommentsList';
import UpvotesSection from '../Components/UpvotesSection';
import AddCommentForm from '../Components/AddCommentForm';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/articles/${name}`);
      const body = await response.json();
      console.log(body)
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);


  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1 style={{ textAlign: "center" ,marginBottom:"20px"}}>{article.title}</h1>
      <hr style={{width:"50%",background:"black"}}></hr>
     <UpvotesSection  articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
            <hr style={{width:"70%",background:"black"}}></hr>
<CommentsList comments={articleInfo.comments}/>
<AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
      <h2 style={{ textAlign: "center" }}>Other articles.</h2>
      <ArticleList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
