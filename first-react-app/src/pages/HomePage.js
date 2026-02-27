import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../store/articlesSlice';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(fetchArticles({ category, page }));
  }, [dispatch, category, page]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div className="home-page">
      <CategoryFilter />
      <div className="articles-list">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default HomePage;
