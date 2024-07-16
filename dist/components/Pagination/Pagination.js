import React from 'react';
import './Pagination.module.css';
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (React.createElement("div", null, [...Array(totalPages)].map((_, index) => (React.createElement("button", { key: index, onClick: () => onPageChange(index + 1), style: { fontWeight: currentPage === index + 1 ? 'bold' : 'normal' } }, index + 1)))));
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map