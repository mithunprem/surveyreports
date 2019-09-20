import React, { Component, Fragment } from 'react';
import { Col, Card, Button, CardHeader, CardFooter, CardBody, Collapse, Table } from 'reactstrap';

export default class ThemeDetails extends Component {

  state = {
    showQuestions: false
  }

  toggleQuestionView = () => {
    this.setState({
      showQuestions: !this.state.showQuestions
    })
  }

  render() {
    const { showQuestions } = this.state;

    const { theme } = this.props;
    if (!theme) return null;

    const themeRating = theme.averageRating.toFixed(2);
    let outlineColor = "";

    if (themeRating < 3.5) {
      outlineColor = "danger";
    } else if (3.5 < themeRating && themeRating < 4) {
      outlineColor = "warning";
    } else {
      outlineColor = "success";
    }

    const buttonText = showQuestions ? 'Hide responses' : 'View responses in detail';

    return (
      <Fragment>
      <Col xs={12} sm={5} className="m-2">
        <Card body outline color={ outlineColor }>
          <CardHeader tag="h5">{theme.name}</CardHeader>
          <CardBody>
              <Button size="sm" color="link" onClick={this.toggleQuestionView}>{buttonText}</Button>
            <Collapse isOpen={showQuestions}>
              <Table striped>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th style={{whiteSpace: 'nowrap'}}>Average Rating</th>
                  </tr>
                </thead>
                <tbody>
                {
                  theme.questions.map(( question, index ) => {
                    return (
                      <tr key={index}>
                        <td>{question.description}</td>
                        <td style={{textAlign: 'center'}}>{question.averageRating.toFixed(2)}</td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </Table>
            </Collapse>
          </CardBody>
          <CardFooter className="text-muted">Average rating : {(theme.averageRating.toFixed(2))}</CardFooter>
        </Card>
      </Col>
      </Fragment>
    );
  }
}
