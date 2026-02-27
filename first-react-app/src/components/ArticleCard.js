import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => (
  <div className="article-card">
    <img src={article.urlToImage} alt={article.title} />
    <div className="article-content">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <Link to={`/article/${article.title}`}>Read more</Link>
    </div>
  </div>
);

export default ArticleCard;
