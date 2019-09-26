import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Button, Card, Collapse,
  CardHeader, CardFooter, CardBody
} from 'reactstrap';
import QuestionsTable from './QuestionsTable';
import colourCodesForRating from '../Utils/ColourCodesForRating';


export default class ThemeDetails extends Component {

  state = {
    showQuestions: false,
    themeRating: 0,
    outlineColor: ""
  }

  componentDidMount() {
    const { theme } = this.props;
    const themeRating = theme.averageRating.toFixed(2);
    let outlineColor = colourCodesForRating(themeRating);

    this.setState({ themeRating, outlineColor });
  }

  toggleQuestionView = () => {
    this.setState({
      showQuestions: !this.state.showQuestions
    })
  }

  render() {
    const { theme } = this.props;
    if (!theme) return null;

    const { showQuestions, themeRating, outlineColor } = this.state;
    const buttonText =
      showQuestions ? 'Hide responses' : 'View responses in detail';

    return (
      <Fragment>
        <Col xs={12} sm={12} md={6} xl={6} className="mb-4">
          <Card body outline className={`theme-details margin-${outlineColor}`}>
            <CardHeader tag="h5">{theme.name}</CardHeader>
            <CardBody>
              <Button size="sm" color="link" onClick={this.toggleQuestionView}>
                {buttonText}
              </Button>
              <Collapse isOpen={showQuestions}>
                <QuestionsTable questions={theme.questions} />
              </Collapse>
            </CardBody>
            <CardFooter className="text-muted">
              Average rating : {( themeRating )}
            </CardFooter>
          </Card>
        </Col>
      </Fragment>
    );
  }
}

ThemeDetails.propTypes = {
  theme: PropTypes.object
}
