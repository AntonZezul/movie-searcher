import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviePage } from '../store/moviesReducer';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pageContainer: {
    marginTop: theme.spacing(6),
  },
  pageGridItem: {
    cursor: 'pointer',
  },
  pageGridItemActive: {
    border: '1px solid black',
    backgroundColor: theme.palette.primary.dark,
  },
  pageGridContainer: {
    justifyContent: 'center',
  },
}));

function Pages() {
  const classes = useStyle();
  const { totalResults, page } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const pages = Array.apply(null, {
    length: Math.round(totalResults / 10),
  }).map(Number.call, Number);

  return (
    <>
      <Container maxWidth='md' className={classes.pageContainer}>
        <Grid container spacing={1} className={classes.pageGridContainer}>
          {pages.map((item) => {
            item = item + 1;
            console.log(item);
            return (
              <Grid
                item
                key={item}
                onClick={() => dispatch(setMoviePage(item))}
                className={`${classes.pageGridItem} ${
                  item === page && classes.pageGridItemActive
                }`}>
                {item}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Pages;
