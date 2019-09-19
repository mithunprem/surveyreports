import React, { Component, Fragment } from 'react';
import SurveryMetaData from './PageComponents/SurveryMetaData';

export default class Surveys extends Component {

  state = {
    isSurveyResultsLoading: false,
    surveyResults: {}
  };

  componentDidMount() {
    this.setState(
      {
        isSurveyResultsLoading: true
      },
      async () => {
        const { survey_results: surveyResults } = await this.fetchSurveyResults();
        console.error(surveyResults);
        this.setState({
          isSurveyResultsLoading: false,
          surveyResults
        });
      }
    );
  }

  fetchSurveyResults() {
    return fetch('https://px2yf2j445.execute-api.us-west-2.amazonaws.com/production/surveys')
      .then(response => response.json())
      .catch(error => console.error('Error:', error));
  }

  render() {
    return null;
  }
}
