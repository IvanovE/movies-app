import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Welcome } from './pages/Welcome';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Welcome />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
