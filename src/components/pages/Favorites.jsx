import React from 'react';
import Header from '../Header';
import MovieItem from '../Movie/MovieItem';
import MovieList from '../Movie/MovieList';

function Favorites() {
  const arr = [1, 2, 3, 4, 5];

  const allStorage = () => {
    const result = [];
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      result.push(JSON.parse(localStorage.getItem(key)));
    });
    return result;
  };

  return (
    <>
      <Header />
      <MovieList marginTop='8rem'>
        {<MovieItem movies={allStorage()} />}
      </MovieList>
    </>
  );
}

export default Favorites;
