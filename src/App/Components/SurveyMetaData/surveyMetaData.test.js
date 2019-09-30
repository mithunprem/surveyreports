import React from 'react';
import { create } from 'react-test-renderer';
import SurveyMetaData from '../../Components/SurveyMetaData';

describe("SurveyMetaData", () => {

  const surveyMetaDataSample = {
    name: "Simple Survey",
    participant_count: 6,
    response_rate: 0.8333333333333334
  };

  test("should render without throwing an error", () => {
    const div = document.createElement('div');
    div.setAttribute("id", "viewMetaDataButton");
    document.body.appendChild(div);

    const surveyMetaData = create(<SurveyMetaData surveyMetaData={surveyMetaDataSample}  />).toJSON();
    expect(surveyMetaData).toMatchSnapshot();
  });
});
