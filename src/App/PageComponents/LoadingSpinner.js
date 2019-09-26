import React, { Fragment } from 'react';
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

export default LoadingSpinner;
