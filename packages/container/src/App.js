import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

// import Progress from './components/Progress';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

// const MarketingLazy = lazy(() => import('./components/MarketingApp'));
// const AuthLazy = lazy(() => import('./components/AuthApp'));
// const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   useEffect(() => {
//     if (isSignedIn) {
//       history.push('/dashboard');
//     }
//   }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
      <div>
                <Header />
                <MarketingApp />
            </div>
      </StylesProvider>
    </Router>
  );
};