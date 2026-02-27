import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/articlesSlice';

const categories = ['general', 'business', 'technology', 'entertainment'];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.articles.category);

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={currentCategory === category ? 'active' : ''}
          onClick={() => dispatch(setCategory(category))}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
