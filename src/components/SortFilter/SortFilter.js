import React from 'react';

const SortFilter = ({ onSortChange }) => {
  return (
    <div>
      <label>
        Sort by Price:
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="none" defaultChecked hidden/>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
};

export default SortFilter;