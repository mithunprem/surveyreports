import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardHeader, CardBody, CardText, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { SURVEY_DETAILS_URL } from '../Constants';

class Survey extends Component {

  openSurveyDetailsPage = () => {
    const { history, survey } = this.props;

    history.push({
      pathname: SURVEY_DETAILS_URL,
      state: { url: survey.url }
    });
  }

  render() {
    const {
      name, submitted_response_count,
      participant_count, response_rate
    } = this.props.survey;

    return (
      <Fragment>
        <Col xs={8} sm="auto" className="p-0 m-3">
          <Card>
            <CardHeader tag="h5">{name}</CardHeader>
            <CardBody>
              <CardText>
                Participant Count : {participant_count}
              </CardText>
              <CardText>
                Submitted Response Count : {submitted_response_count}
              </CardText>
              <CardText>
                Response Rate : {(response_rate*100).toFixed(2)}%
              </CardText>
              <Button size="sm" onClick={this.openSurveyDetailsPage}>
                View Survey Details
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Fragment>
    )
  }
}

Survey.propTypes = {
  history: PropTypes.object,
  survey: PropTypes.object
}

export default withRouter(Survey);
