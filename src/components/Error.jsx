import { Container, makeStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';

const useStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    error: {
      marginTop: theme.spacing(10),
    },
  }));

function Error({ error }) {
    const classes = useStyle()
  return (
    <Container maxWidth='sm' className={classes.error}>
      <Alert variant='outlined' severity='error'>
        {error}
      </Alert>
    </Container>
  );
}

export default Error;
