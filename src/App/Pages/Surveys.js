import React, { Component, Fragment } from 'react';
import { Row } from 'reactstrap';
import SurveyMetaData from '../PageComponents/SurveyMetaData';
import { API_URL } from '../Constants';

export default class Surveys extends Component {

  state = {
    isSurveyResultsLoading: false,
    surveyResults: []
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
    return fetch(`${API_URL}/surveys`)
      .then(response => response.json())
      .catch(error => console.error('Error:', error));
  }

  render() {
    const { surveyResults } = this.state;
    if (!surveyResults.length > 0) return null;

    return (
      <Fragment>
      <Row>
      {
        surveyResults.map(( survey, index ) => {
          return (
            <SurveyMetaData
              key={index}
              survey={survey}
            />
          )
        })
      }
      </Row>
      </Fragment>
    );
  }
}
