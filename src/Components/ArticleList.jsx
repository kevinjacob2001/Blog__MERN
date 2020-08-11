import React from 'react';
import {Link} from 'react-router-dom';

import ArticlesListPage from '../pages/ArticlesListPage';


const ArticleList=({articles})=>{
    return(
<>
{articles.map((article,key)=>{
          return(
    <Link className="article-list-item"  key={key} to={`/article/${article.name}`}>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0,150)}...</p>
    </Link>
          )
      })} 
</>
    )
}

export default ArticleList;