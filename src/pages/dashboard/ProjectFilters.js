import styled from 'styled-components';

const filtersBy = [
  'all',
  'mine',
  'development',
  'design',
  'sales',
  'marketing',
];

export default function ProjectFilters({ currentFilter, changeFilter }) {
    
  const handleClick = (filter) => {
    changeFilter(filter);
  };

  return (
    <FilterContainer>
      <nav>
        <p>Filter by:</p>
        {filtersBy.map((filter) => (
          <button
            key={filter}
            onClick={() => handleClick(filter)}
            className={currentFilter === filter ? 'active' : ''}
          >
            {filter}
          </button>
        ))}
      </nav>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  margin: 30px auto;

  & nav {
    display: flex;
    padding: 10px;
    background-color: #fff;
    border-radius: 4px;
  }
  & p {
    font-size: 0.9em;
    margin-right: 10px;
  }
  & button {
    background: transparent;
    border: 0;
    font-family: inherit;
    font-weight: bold;
    color: var(--text-color);
    cursor: pointer;
    border-right: 1px solid #e4e4e4;
    font-size: 0.9em;
  }
  & button:last-child {
    border: 0;
  }
  & button.active {
    color: var(--primary-color);
  }
`;
