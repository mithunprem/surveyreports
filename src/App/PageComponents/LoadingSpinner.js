import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

const LoadingSpinner = ({ spinnerText }) => {
  return (
    <Fragment>
      <div className="m-4">
        { spinnerText } <Spinner type="grow" color="dark" />
      </div>
    </Fragment>
  );
}

LoadingSpinner.propTypes = {
  spinnerText: PropTypes.string
}

export default LoadingSpinner;
