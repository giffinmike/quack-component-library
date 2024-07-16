import React from 'react';
import './Pagination.module.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div>
      {[...Array(totalPages)].map((_, index) => (
        <button key={index} onClick={() => onPageChange(index + 1)} style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
