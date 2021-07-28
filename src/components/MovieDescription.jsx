import {
  Card,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Poster from './Poster';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { useState } from 'react';
import Star from '@material-ui/icons/Star';
import { useEffect } from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  movieContainer: {
    marginTop: theme.spacing(12),
  },
  titleGrid: {
    marginBottom: theme.spacing(2),
    alignItems: 'center',
  },
  ratingStrong: {
    color: theme.palette.warning.dark,
  },
  star: {
    cursor: 'pointer',
  },
}));

function MovieDescription({ movie, id }) {
  const classes = useStyle();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const localStorageItem = localStorage.getItem(`id:${id}`);

    if (
      localStorage.length !== 0 &&
      localStorageItem &&
      `id:${JSON.parse(localStorageItem).imdbID}` === `id:${id}`
    ) {
      setIsFavorite(true);
    }
  }, []);

  const handleClickStar = () => {
    setIsFavorite((prev) => !prev);
    isFavorite
      ? localStorage.removeItem(`id:${id}`)
      : localStorage.setItem(`id:${id}`, JSON.stringify(movie));
  };

  return (
    <Container maxWidth='lg' className={classes.movieContainer}>
      <Grid container spacing={1} className={classes.titleGrid}>
        <Grid item>
          <Typography variant='h4' color='initial'>
            {movie.Title}
          </Typography>
        </Grid>
        <Grid
          item
          onClick={() => {
            handleClickStar();
          }}>
          {isFavorite ? (
            <Star
              fontSize='large'
              htmlColor='#E8A628'
              titleAccess='Add to favorite'
              className={classes.star}
            />
          ) : (
            <StarBorderIcon
              fontSize='large'
              htmlColor='#E8A628'
              titleAccess='Add to favorite'
              className={classes.star}
            />
          )}
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item sm={4} xs={12}>
          <Card>
            <Poster poster={movie.Poster} />
          </Card>
        </Grid>
        <Grid item sm={8}>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Ratings:</strong> Metascore:{' '}
            <strong className={classes.ratingStrong}>{movie.Metascore}</strong>{' '}
            Imdb:{' '}
            <strong className={classes.ratingStrong}>{movie.imdbRating}</strong>
          </Typography>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Released:</strong> {movie.Released}
          </Typography>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Country:</strong> {movie.Country}
          </Typography>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Production:</strong> {movie.Production}
          </Typography>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Director:</strong> {movie.Director}
          </Typography>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Genre:</strong> {movie.Genre}
          </Typography>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Type:</strong> {movie.Type}
          </Typography>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Rated:</strong> {movie.Rated}
          </Typography>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Awards:</strong> {movie.Awards}
          </Typography>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Runtime:</strong> {movie.Runtime}
          </Typography>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Actors:</strong> {movie.Actors}
          </Typography>
          <Typography gutterBottom variant='body1' color='initial'>
            <strong>Plot:</strong> {movie.Plot}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MovieDescription;
