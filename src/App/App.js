import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './Components/Header';
import SurveyList from './Pages/SurveyList';
import SurveyDetailsWrapper from './Pages/SurveyDetailsWrapper';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path='/'
          exact
          render={() => <Header><SurveyList /></Header>}
        />
        <Route
          path='/surveyDetails'
          render={() => <Header><SurveyDetailsWrapper /></Header>}
        />
      </Switch>
    </Router>
  );
}

export default App;
