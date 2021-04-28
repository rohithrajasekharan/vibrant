import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Page from './Page'
import Home from '../views/Home'
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

export default function Routes() {
  return (
    <Switch>
      <Route history={history} exact path="/home" render={() =>
        <Page title="Home" description="Here goes the page description.....">
          <Home />
        </Page>
      } />
    </Switch>
  )
}
