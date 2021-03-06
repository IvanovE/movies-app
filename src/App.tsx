import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Welcome } from './pages/Welcome';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Catalog } from './pages/Catalog';
import { useAppDispatch } from './store/store';
import { initApp } from './store/slices/appSlice';
import { MovieCategory } from './pages/MovieCategory';
import { MovieDetails } from './pages/MovieDetails';
import { ScrollToTop } from './layout/ScrollToTop';

export function App() {
  const dispatch = useAppDispatch();
  dispatch(initApp());

  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} />
            <Route exact path='/catalog' component={Catalog} />
            <Route exact path='/catalog/:list/:page' component={MovieCategory} />
            <Route exact path='/movie/:id' component={MovieDetails} />
          </Switch>
        </Layout>
      </ScrollToTop>
    </Router>
  );
}
