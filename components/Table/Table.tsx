import React from 'react';
import './Table.module.css';

interface TableProps {
  columns: string[];
  data: string[][];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{ border: '1px solid #ddd', padding: '8px' }}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} style={{ border: '1px solid #ddd', padding: '8px' }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
