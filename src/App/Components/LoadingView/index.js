import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { Alert } from 'reactstrap';

const LoadingView = ({ isLoading, text }) => {
  return (
    <Fragment>
      {
        isLoading ?
          <Spinner spinnerText={`Loading ${text}…`} /> :
          <Alert color="danger">
            {`Failed to load ${text}. Please try again !.`}
          </Alert>
      }
    </Fragment>
  )
}

LoadingView.propTypes = {
  isLoading: PropTypes.bool,
  text: PropTypes.string
}

export default LoadingView;
