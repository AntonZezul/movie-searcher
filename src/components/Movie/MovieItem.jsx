import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
  Grid,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Poster from '../Poster';
import { useDispatch } from 'react-redux';
import { getMovieId } from '../../store/movieReducer';
import { useEffect } from 'react';
import { useState } from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function MovieItem({ movies }) {
  const history = useHistory();
  const classes = useStyle();

  useEffect(() => {}, []);
  return (
    <>
      {movies.map((item) => {
        return (
          <Grid item key={item.imdbID} xl={2} lg={3} md={4} sm={6} xs={12}>
            <Card raised className={classes.card}>
              <Poster poster={item.Poster} />
              <CardContent>
                <Typography
                  variant='h5'
                  color='initial'
                  gutterBottom
                  title={item.Title}>
                  {item.Title.length < 21
                    ? item.Title
                    : item.Title.substr(0, 18) + '...'}
                </Typography>
                <Typography variant='h6' color='initial' gutterBottom>
                  {item.Year}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    history.push(`/movie/${item.imdbID}`);
                  }}
                  variant='outlined'
                  color='secondary'>
                  Descriptions
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}

export default MovieItem;
