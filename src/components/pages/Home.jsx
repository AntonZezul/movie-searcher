import React from 'react';
import { useSelector } from 'react-redux';
import Error from '../Error';
import Header from '../Header';
import Loader from '../Loader';
import MovieItem from '../Movie/MovieItem';
import MovieList from '../Movie/MovieList';
import Pages from '../Pages';
import SearchField from '../SearchField';

function Home() {
  const { movies, loading, error } = useSelector((state) => state.movies);

  return (
    <div>
      <>
        <Header />
        <SearchField />
        {loading && !error ? (
          <Loader />
        ) : error ? (
          <Error error={error} />
        ) : (
          <>
            <Pages />
            <MovieList marginTop='4rem'>
              <MovieItem movies={movies} />
            </MovieList>
          </>
        )}
      </>
    </div>
  );
}

export default Home;
