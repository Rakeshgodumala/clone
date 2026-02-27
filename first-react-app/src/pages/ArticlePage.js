import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticlePage = () => {
  const { title } = useParams();
  const article = useSelector((state) =>
    state.articles.articles.find((a) => a.title === title)
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;
