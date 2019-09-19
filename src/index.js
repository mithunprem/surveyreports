import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './App/Header';
import Surveys from './App/Pages/Surveys';
import SurveyDetails from './App/Pages/SurveyDetails';
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
        render={() => <Header><SurveyDetails /></Header>}
      />
    </Switch>
  </Router>,
  document.getElementById('root')
);
