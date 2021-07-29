import { CircularProgress, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loader: {
    marginTop: theme.spacing(16),
  },
}));

function Loader() {
  const classes = useStyle();
  return (
    <Grid container justifyContent='center' className={classes.loader}>
      <CircularProgress />
    </Grid>
  );
}

export default Loader;
