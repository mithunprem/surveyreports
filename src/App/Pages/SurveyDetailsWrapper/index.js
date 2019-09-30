import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Alert } from 'reactstrap';
import LoadingSpinner from '../../Components/LoadingSpinner';
import SurveyDetails from '../../Components/SurveyDetails';
import { API_URL } from '../../Constants';

class SurveyDetailsWrapper extends Component {

  state = {
    isSurveyDetailsLoading: false,
    surveyDetails: null
  };

  componentDidMount() {
    this.setState(
      {
        isSurveyDetailsLoading: true
      },
      async () => {
        const surveyDetails = await this.fetchSurveyDetails();
        this.setState({
          isSurveyDetailsLoading: false,
          surveyDetails
        });
      }
    );
  }

  fetchSurveyDetails() {
    const url = this.props.location.state.url;
    return fetch(`${API_URL}${url}`)
      .then(response => response.json())
      .catch(error => console.error('Error:', error));
  }

  render() {
    const { surveyDetails, isSurveyDetailsLoading } = this.state;

    if (!surveyDetails ) {
      return (
        isSurveyDetailsLoading ?
          <LoadingSpinner spinnerText='Loading survey details…' /> :
          <Alert color="danger">
            Survey details failed to load. Please try again !.
          </Alert>
      )
    }

    return (
      <Fragment>
        <SurveyDetails surveyDetails={surveyDetails} />
      </Fragment>
    );
  }
}

export default withRouter(SurveyDetailsWrapper);
