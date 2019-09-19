import React, { Component, Fragment } from 'react';
import {
  Col, Card, CardHeader, CardBody, CardText, Button
} from 'reactstrap';

export default class SurveyMetaData extends Component {

  render() {
    const {
      name, participant_count, url,
      submitted_response_count, response_rate
    } = this.props.survey;

    return (
      <Fragment>
          <Col xs={12} sm="auto" className="p-3">
            <Card>
              <CardHeader tag="h5">{name}</CardHeader>
              <CardBody>
                <CardText>Participant Count : {participant_count}</CardText>
                <CardText>Submitted Response count : {submitted_response_count}</CardText>
                <CardText>Response Rate : {response_rate.toFixed(2)}%</CardText>
                <Button>View Survey Details</Button>
              </CardBody>
            </Card>
          </Col>
      </Fragment>
    )
  }
}
