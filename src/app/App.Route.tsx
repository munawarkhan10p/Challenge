import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../shared/helpers/history';
import { PageNotFound } from '../shared/components/PageNotFound/PageNotFound';
import { Route as CustomRoute, getRoutes } from '../services/role-management/routes';

export default function AppRoute(): JSX.Element {
  const routes: CustomRoute[] = getRoutes();

  return (
    <Router history={history}>
        <Switch>
          {routes.map((route, key) => (
            <Route path={route.url} key={key} exact render={(): JSX.Element => <route.component />} />
          ))}
          <Route path="*" render={(): React.ReactNode => <PageNotFound />} />
        </Switch>
    </Router>
  );
}
