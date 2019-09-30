import React from 'react';
import { create } from 'react-test-renderer';
import SurveyDetails from '../../Components/SurveyDetails';
import { BrowserRouter } from 'react-router-dom';

describe("SurveyDetails", () => {

  const surveyDetailsSampleData = {
    survey_result_detail: {
      name: "Simple Survey",
      participant_count: 6,
      response_rate: 0.8333333333333334,
      submitted_response_count: 5,
      themes: [
        {
          name: "The Work",
          questions: [
            {
              description: "Test question 1",
              survey_responses: [{response_content: "5"}],
              averageRating: 3.6
            },
            {
              description: "Test question 2",
              survey_responses: [{response_content: "4"}],
              averageRating: 4.6
            }
          ],
          averageRating: 4.866666666666666}
      ]
    }
  };

  const history = {};

  test("should render without throwing an error", () => {
    const div = document.createElement('div');
    div.setAttribute("id", "viewMetaDataButton");
    document.body.appendChild(div);

    const surveyDetails = create(
      <BrowserRouter>
        <SurveyDetails surveyDetails={surveyDetailsSampleData} history={history} />
      </BrowserRouter>).toJSON();
    expect(surveyDetails).toMatchSnapshot();
  });
});
