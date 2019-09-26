import React, { Fragment } from 'react';
import { Row } from 'reactstrap';
import ThemeDetails from './ThemeDetails';

const Themes = ({ themes }) => {
  return (
    <Fragment>
      <hr />
      <h6 className="ml-4 mb-2"> Themes Focussed :</h6>
      <Row className="theme-details ml-1 mb-3 mr-1">
        {
          themes.map((theme, index) => {
            return <ThemeDetails key={index} theme={theme}/>
          })
        }
      </Row>
    </Fragment>
  );
}

export default Themes;
