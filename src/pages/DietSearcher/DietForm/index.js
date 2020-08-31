import React, { useContext } from 'react';
import * as S from './styles';

// Context
import { QueryContext } from '../../../contexts/queryContext';

export default function DietForm({ handleSubmit }) {
  const { setQuery } = useContext(QueryContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="query">Recipe: </label>
      <input type="text" name="query" onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}
