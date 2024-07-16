import React from 'react';
import './Table.module.css';
const Table = ({ columns, data }) => {
    return (React.createElement("table", { style: { width: '100%', borderCollapse: 'collapse' } },
        React.createElement("thead", null,
            React.createElement("tr", null, columns.map((column, index) => (React.createElement("th", { key: index, style: { border: '1px solid #ddd', padding: '8px' } }, column))))),
        React.createElement("tbody", null, data.map((row, rowIndex) => (React.createElement("tr", { key: rowIndex }, row.map((cell, cellIndex) => (React.createElement("td", { key: cellIndex, style: { border: '1px solid #ddd', padding: '8px' } }, cell)))))))));
};
export default Table;
//# sourceMappingURL=Table.js.map