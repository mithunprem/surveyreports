import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Breadcrumb from './BreadCrumb';
import ColourLegendView from './ColourLegendView';
import SurveyMetaData from './SurveyMetaData';
import Themes from './Themes';
import formatSurveyResponses from '../Utils/FormatSurveyResponses';

class SurveyDetails extends Component {

  state = {
    surveyDetails: null
  };

  componentDidMount() {
    const surveyDetails = formatSurveyResponses(this.props.surveyDetails);
    this.setState({ surveyDetails });
  }

  render() {
    const { surveyDetails } = this.state;
    if(!surveyDetails) return null;
    const { name, themes } = surveyDetails;

    return (
      <Fragment>
        <div className="survey-details">
          <Breadcrumb pageName={name} />
          <h4 className="ml-4">{name}</h4>
          <SurveyMetaData data={surveyDetails} />
          <Themes themes={themes} />
          <ColourLegendView />
        </div>
      </Fragment>
    )
  }
}

SurveyDetails.propTypes = {
  surveyDetails: PropTypes.object
}

export default withRouter(SurveyDetails);
