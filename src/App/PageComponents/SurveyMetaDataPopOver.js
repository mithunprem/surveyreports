import React, { Fragment } from 'react';
import { UncontrolledPopover, PopoverBody } from 'reactstrap';

const SurveyMetaDataPopOver = ({ target, data }) => {

  const {
    participant_count, submitted_response_count, response_rate
  } = data;

  return (
    <Fragment>
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

export default SurveyMetaDataPopOver;
