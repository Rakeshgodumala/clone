import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/articlesSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.articles.page);

  return (
    <div className="pagination">
      <button onClick={() => dispatch(setPage(page - 1))} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={() => dispatch(setPage(page + 1))}>Next</button>
    </div>
  );
};

export default Pagination;
