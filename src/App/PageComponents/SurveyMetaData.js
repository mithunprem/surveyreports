import React, { Component, Fragment } from 'react';
import { Col, Card, CardHeader, CardBody, CardText, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { SURVEY_DETAILS_URL } from '../Constants';

class SurveyMetaData extends Component {

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
        <Col xs={12} sm="auto" className="p-3">
          <Card>
            <CardHeader tag="h5">{name}</CardHeader>
            <CardBody>
              <CardText>
                Participant Count : {participant_count}
              </CardText>
              <CardText>
                Submitted Response count : {submitted_response_count}
              </CardText>
              <CardText>
                Response Rate : {(response_rate*100).toFixed(2)}%
              </CardText>
              <Button onClick={this.openSurveyDetailsPage}>
                View Survey Details
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Fragment>
    )
  }
}

export default withRouter(SurveyMetaData);
