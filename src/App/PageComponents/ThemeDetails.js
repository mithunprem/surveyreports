import React, { Component, Fragment } from 'react';
import {
  Col, Button, Card, Collapse,
  CardHeader, CardFooter, CardBody
} from 'reactstrap';
import QuestionsTable from './QuestionsTable';

export default class ThemeDetails extends Component {

  state = {
    showQuestions: false,
    outlineColor: ""
  }

  componentDidMount() {
    const { theme } = this.props;
    const themeRating = theme.averageRating.toFixed(2);
    let outlineColor = "";

    if (themeRating < 3.5) {
      outlineColor = "danger";
    } else if (3.5 < themeRating && themeRating < 4) {
      outlineColor = "warning";
    } else {
      outlineColor = "success";
    }

    this.setState({ outlineColor });
  }

  toggleQuestionView = () => {
    this.setState({
      showQuestions: !this.state.showQuestions
    })
  }

  render() {
    const { theme } = this.props;
    if (!theme) return null;

    const { showQuestions, outlineColor } = this.state;
    const buttonText =
      showQuestions ? 'Hide responses' : 'View responses in detail';

    return (
      <Fragment>
        <Col xs={12} sm={12} md={6} xl={6} className="mb-4">
          <Card body outline color={ outlineColor }>
            <CardHeader tag="h5">{theme.name}</CardHeader>
            <CardBody>
              <Button
                size="sm" color="link"
                onClick={this.toggleQuestionView}
                >{buttonText}</Button>
              <Collapse isOpen={showQuestions}>
                <QuestionsTable questions={theme.questions} />
              </Collapse>
            </CardBody>
            <CardFooter className="text-muted">
              Average rating : {(theme.averageRating.toFixed(2))}
            </CardFooter>
          </Card>
        </Col>
      </Fragment>
    );
  }
}
