import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Favorites from './components/pages/Favorites';
import Home from './components/pages/Home';
import Movie from './components/pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/favorites' component={Favorites} />
        <Route path='/movie/:id' component={Movie} />
        <Route exact path='/' component={Home} />

        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
