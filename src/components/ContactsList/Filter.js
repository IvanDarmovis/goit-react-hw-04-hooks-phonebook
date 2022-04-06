import React from 'react';

function Filter({ onInput, filter }) {
  return (
    <label>
      Find contacts by name
      <input onChange={onInput} type="text" name="filter" value={filter} />
    </label>
  );
}

export default Filter;
