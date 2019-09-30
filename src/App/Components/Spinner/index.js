import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Spinner as LoadingSpinner } from 'reactstrap';

const Spinner = ({ spinnerText }) => {
  return (
    <Fragment>
      <div className="m-4">
        { spinnerText } <LoadingSpinner type="grow" color="dark" />
      </div>
    </Fragment>
  );
}

Spinner.propTypes = {
  spinnerText: PropTypes.string
}

export default Spinner;
