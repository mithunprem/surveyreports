import React, { Component, Fragment } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../Constants';

class SurveyDetails extends Component {

  state = {
    isSurveyDetailsLoading: false,
    surveyDetails: {}
  };

  componentDidMount() {
    this.setState(
      {
        isSurveyDetailsLoading: true
      },
      async () => {
        const { survey_result_detail: surveyDetails } = await this.fetchSurveyDetails();
        console.error(surveyDetails);
        this.setState({
          isSurveyResultsLoading: false,
          surveyDetails
        });
      }
    );
  }

  fetchSurveyDetails() {
    const url = this.props.location.state.url;
    return fetch(`${API_URL}${url}`)
      .then(response => response.json())
      //.then(response => this.constructor.formatQuestionResponses(response))
      .catch(error => console.error('Error:', error));
  }

  render() {
    const { surveyDetails } = this.state;
    if (!surveyDetails) return null;

    const {
      name, participant_count, response_rate,
      submitted_response_count, themes
    } = surveyDetails;

    return (
      <Fragment>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
          <BreadcrumbItem active tag="span">{name}</BreadcrumbItem>
        </Breadcrumb>
          <h3>Details of {name}</h3>
          <hr className="my-2" />
          <p>
            {participant_count}<br/>
            {response_rate}
          </p>
      </Fragment>
    )

  }
}

export default withRouter(SurveyDetails);
