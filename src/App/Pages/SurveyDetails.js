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
        const surveyDetails = await this.fetchSurveyDetails();
        this.setState({
          isSurveyResultsLoading: false,
          surveyDetails
        });
      }
    );
  }

  static formatQuestionResponses(response) {
    const { survey_result_detail: surveyDetails } = response;
    let themeAverage = 0;
    let questionAverageRating = 0;

    surveyDetails.themes.forEach(theme => {
      themeAverage = 0;
      theme.questions.forEach(question => {
        questionAverageRating =
          this.calculateAverageRating(question.survey_responses);
        question.averageRating = questionAverageRating;
        themeAverage+= questionAverageRating;
      })
      theme.averageRating = themeAverage / theme.questions.length ;
    });
    return surveyDetails;
  }

  static calculateAverageRating(surveyResponses) {
    let responseAggregate = 0;
    let numberOfResponses = 0;

    if (!surveyResponses || !surveyResponses.length > 0) {
      return null;
    }

    surveyResponses.forEach(({ response_content: response }) => {
      if (response && (response !== "" || response !== " ")) {
        responseAggregate+= Number(response);
        numberOfResponses++;
      }
    });

    return responseAggregate / numberOfResponses;
  }

  fetchSurveyDetails() {
    const url = this.props.location.state.url;
    return fetch(`${API_URL}${url}`)
      .then(response => response.json())
      .then(response => this.constructor.formatQuestionResponses(response))
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
