import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import LoadingView from '../../Components/LoadingView';
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
        <LoadingView
          isLoading={isSurveyDetailsLoading} text={'survey details'} />
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
