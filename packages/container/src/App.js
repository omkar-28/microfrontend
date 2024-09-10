import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {

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