import React from "react";
import "./table.css";

export interface TableProps {
  className?: string;
  flexColumns?: string[];
  headers: string[];
  rows: string[][];
}

export const Table: React.FC<TableProps> = ({
  className = "",
  flexColumns,
  headers,
  rows,
}) => {
  return (
    <div className={`table table-flex ${className}`}>
      <div className="table-header">
        {headers.map((h, i) => (
          <div
            key={i}
            className="table-cell"
            style={flexColumns ? { flex: flexColumns[i] } : undefined}
          >
            {h}
          </div>
        ))}
      </div>

      <div className="table-body">
        {rows.map((row, rIdx) => (
          <div key={rIdx} className="table-row">
            {row.map((cell, cIdx) => (
              <div
                key={cIdx}
                className="table-cell"
                style={flexColumns ? { flex: flexColumns[cIdx] } : undefined}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
