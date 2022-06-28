import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Welcome } from './pages/Welcome';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Catalog } from './pages/Catalog';
import { useAppDispatch } from './store/store';
import { initApp } from './store/slices/appSlice';
import { MovieGroup } from './pages/MovieGroup';
import { MovieDetails } from './pages/MovieDetails';

export function App() {
  const dispatch = useAppDispatch();
  dispatch(initApp());

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route exact path='/catalog' component={Catalog} />
          <Route exact path='/catalog/:list/:page' component={MovieGroup} />
          <Route exact path='/catalog/:list/:page/:id' component={MovieDetails} />
        </Switch>
      </Layout>
    </Router>
  );
}
