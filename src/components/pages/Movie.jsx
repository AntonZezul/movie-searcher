import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../../asyncActions/movies';
import Error from '../Error';
import Header from '../Header';
import Loader from '../Loader';
import MovieDescription from '../MovieDescription';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  searchContainer: {
    marginTop: theme.spacing(16),
  },
}));

function Movie() {
  const classes = useStyle();
  const { movie, movieId, loading, error } = useSelector((state) => state.movie);
  const dispath = useDispatch()  
  const {id} = useParams()

  useEffect(()=>{
    dispath(fetchMovie(id))
  }, [])

  return (
    <>
      <Header />
      {loading && !error ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <MovieDescription id={id} movie={movie} />
      )}
    </>
  );
}

export default Movie;
