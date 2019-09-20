import React, { Component } from 'react';
import { Row, Spinner } from 'reactstrap';
import SurveyMetaData from '../PageComponents/SurveyMetaData';
import { API_URL } from '../Constants';
import '../App.css';

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
        const { survey_results: surveyResults }
          = await this.fetchSurveyResults();
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
    const { surveyResults, isSurveyResultsLoading } = this.state;

    if (isSurveyResultsLoading) {
      return (
        <div class="m-4">
          Loading survey results..
          <Spinner type="grow" color="dark" />
        </div>
      )
    } else if (!surveyResults.length > 0) {
      return null;
    }

    return (
      <div className="mt-3 survey-results">
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
      </div>
    );
  }
}
