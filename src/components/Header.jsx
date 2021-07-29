import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerMenuButton: {
    marginRight: theme.spacing(1),
  },
  headerMenuLink: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  headerTitle: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position='fixed'>
      <Container>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            className={classes.headerMenuButton}></IconButton>
          <Typography variant='h6' className={classes.headerTitle}>
            Movie database
          </Typography>
          <Box ml={3} mr={3}>
            <Button color='inherit' variant='outlined'>
              <NavLink to='/' className={classes.headerMenuLink}>
                Home
              </NavLink>
            </Button>
          </Box>
          <Box mr={3}>
            <Button color='inherit' variant='outlined'>
              <NavLink to='/favorites' className={classes.headerMenuLink}>
                Favorites
              </NavLink>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
