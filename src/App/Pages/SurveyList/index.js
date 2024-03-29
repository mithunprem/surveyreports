import React, { Component, Fragment } from 'react';
import { Row } from 'reactstrap';
import LoadingView from '../../Components/LoadingView';
import Survey from '../../Components/Survey';
import { API_URL } from '../../Constants';
import './surveyList.scss';

export default class SurveyList extends Component {

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
        const surveyResults = await this.fetchSurveyResults();
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
      .then(response => response.survey_results)
      .catch(error => console.error('Error:', error));
  }

  render() {
    const { surveyResults, isSurveyResultsLoading } = this.state;

    if (!surveyResults.length > 0 ) {
      return (
        <LoadingView
          isLoading={isSurveyResultsLoading} text={'survey results'} />
      )
    }

    return (
      <Fragment>
        <Row className="mt-3 mb-3 survey-list">
          {
            surveyResults.map(( survey, index ) => {
              return <Survey key={index} survey={survey} />;
            })
          }
        </Row>
      </Fragment>
    );
  }
}
