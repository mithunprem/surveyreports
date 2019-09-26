import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './App/Header';
import Surveys from './App/Pages/Surveys';
import SurveyDetailsWrapper from './App/Pages/SurveyDetailsWrapper';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route
        path='/'
        exact
        render={() => <Header><Surveys /></Header>}
      />
      <Route
        path='/surveyDetails'
        render={() => <Header><SurveyDetailsWrapper /></Header>}
      />
    </Switch>
  </Router>,
  document.getElementById('root')
);
