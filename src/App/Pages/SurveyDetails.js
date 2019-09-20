import React, { Component, Fragment } from 'react';
import { Row, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import ThemeDetails from '../PageComponents/ThemeDetails';
import ProgressBar from '../PageComponents/ProgressBar';
import Breadcrumb from '../PageComponents/BreadCrumb';
import SurveyMetaDataPopOver from '../PageComponents/SurveyMetaDataPopOver';
import { API_URL } from '../Constants';

class SurveyDetails extends Component {

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

    const { name, themes } = surveyDetails;

    return (
      <Fragment>
        <Breadcrumb name={surveyDetails.name} />
        <div className="survey-details">
          <h4 className="ml-4">{name}</h4>
          <Button
            className="ml-3"size="sm" color="link"
            id="viewMetaDataButton"
            >View Survey Metadata</Button>
          <SurveyMetaDataPopOver
            target={"viewMetaDataButton"} data={surveyDetails}/>
          <hr />
          <h6 className="ml-4"> Themes Focussed :</h6>
          <Row className="theme-details ml-1 mb-4">
            {
              themes.map((theme, index) => {
                return <ThemeDetails key={index} theme={theme}/>
              })
            }
          </Row>
          <ProgressBar />
        </div>
      </Fragment>
    )
  }
}

export default withRouter(SurveyDetails);
