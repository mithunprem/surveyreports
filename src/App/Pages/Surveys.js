import React, { Component } from 'react';
import { Row } from 'reactstrap';
import SurveyMetaData from '../PageComponents/SurveyMetaData';
import LoadingSpinner from '../PageComponents/LoadingSpinner';
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

    if (!surveyResults.length > 0 ) {
      if ( isSurveyResultsLoading ) {
        return <LoadingSpinner spinnerText='Loading Survey Results' />;
      }

      return null;
    }

    return (
      <Row className="mt-3 mb-3 survey-results">
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
    );
  }
}
