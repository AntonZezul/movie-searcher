import { Container, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPreview, search } from '../asyncActions/movies';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  searchContainer: {
    marginTop: theme.spacing(16),
  },
}));

function SearchField() {
  const classes = useStyle();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.movies);

  const handleSearchFieldChanges = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    value.length !== 0
      ? dispatch(search(value, page))
      : dispatch(fetchPreview(page));
  }, [value, page]);

  return (
    <Container maxWidth='md' className={classes.searchContainer}>
      <TextField
        variant='filled'
        autoFocus
        id='movie'
        label='Search movie'
        type='text'
        value={value}
        onChange={handleSearchFieldChanges}
        fullWidth
      />
    </Container>
  );
}

export default SearchField;
