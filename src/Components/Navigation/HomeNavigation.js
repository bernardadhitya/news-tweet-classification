import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import SearchPage from '../../Containers/SearchPage/SearchPage';
import HomePage from '../../Containers/HomePage/HomePage';

const HomeNavigation = () => {
  return (
    <Switch>
      <Route exact path='/'><Redirect to='/home'/></Route>
      <Route path='/home' component={HomePage}/>
      <Route path='/search' component={SearchPage}/>
    </Switch>
  );
};

export default HomeNavigation;