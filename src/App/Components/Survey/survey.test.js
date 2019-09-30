import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Survey from '../../Components/Survey';

describe("Survey", () => {
  const surveyData = {
    name: 'Test survey',
    submitted_response_count: 6,
    participant_count: 6,
    response_rate: 1
  };

  const history = {};

  test("should render without throwing an error", () => {
    const survey = create(
      <BrowserRouter>
        <Survey survey={surveyData} history={history}/>
      </BrowserRouter>).toJSON();
    expect(survey).toMatchSnapshot();
  });
});
