import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <span
          key={number}
          className={number === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
