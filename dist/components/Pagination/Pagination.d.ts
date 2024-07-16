import React from 'react';
import './Pagination.module.css';
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map