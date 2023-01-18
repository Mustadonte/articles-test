import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';

export const FilterBar = ({ filterHandler, highLighter }) => {
  const [searchParams] = useSearchParams();

  const [filter, setFilter] = useState(() => {
    return searchParams.get('title_contains')
      ? searchParams.get('title_contains')
      : '';
  });
  const handleSubmit = e => {
    e.preventDefault();
    filterHandler(filter);
  };
  const handleChange = e => {
    setFilter(e.target.value);
    highLighter(e.target.value);
  };
  return (
    <form action="filter" onSubmit={handleSubmit} className="filter__form">
      <label htmlFor="filter">
        <span className="filter__label">Filter by keywords</span>
        <div className="filter__wrapper">
          <button className="filter__button" onSubmit={handleChange}>
            <SearchIcon />
          </button>

          <input
            className="filter__input"
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
          />
        </div>
      </label>
    </form>
  );
};
