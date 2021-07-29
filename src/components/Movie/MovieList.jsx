import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

function MovieList({ children, marginTop }) {
  const useStyle = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    cardContainer: {
      marginTop: marginTop,
    },
    cardGrid: {
      justifyContent: 'center',
    },
  }));
  const classes = useStyle();
  return (
    <Container maxWidth='xl' className={classes.cardContainer}>
      <Grid container spacing={4} className={classes.cardGrid}>
        {children}
      </Grid>
    </Container>
  );
}

export default MovieList;
