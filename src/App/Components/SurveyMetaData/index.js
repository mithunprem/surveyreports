import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, UncontrolledPopover, PopoverBody } from 'reactstrap';

const SurveyMetaData = ({ data }) => {

  const {
    participant_count, submitted_response_count, response_rate
  } = data;

  return (
    <Fragment>
      <Button className="ml-3" size="sm" color="link" id="viewMetaDataButton">
        View Survey Metadata
      </Button>
      <UncontrolledPopover placement="bottom" target="viewMetaDataButton">
        <PopoverBody>
          <p>
            Participant Count : {participant_count}<br />
            Submitted Response Count : {submitted_response_count}<br />
            Response Rate : {(response_rate*100).toFixed(2)}%
          </p>
        </PopoverBody>
      </UncontrolledPopover>
    </Fragment>
  )
}

SurveyMetaData.propTypes = {
  data: PropTypes.object
}

export default SurveyMetaData;
