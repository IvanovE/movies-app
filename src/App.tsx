import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Welcome } from './pages/Welcome';

export function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Welcome} />
        </Switch>
      </Layout>
    </Router>
  );
}
