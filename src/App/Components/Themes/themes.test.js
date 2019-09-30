import React from 'react';
import { create } from 'react-test-renderer';
import Themes from '../../Components/Themes';

describe("Themes", () => {

  const themes = [
    {
      name: 'The Work',
      questions: [
        { description: 'Test question 1',
          survey_responses: [
            {id: 1, question_id: 4, respondent_id: 1, response_content: "4"},
            {id: 2, question_id: 4, respondent_id: 2, response_content: "4"}
          ],
          averageRating: 4 }
      ],
      averageRating: 4.5
    },
    {
      name: 'The Place',
      questions: [
        { description: 'Test question 2',
          survey_responses: [
            {id: 1, question_id: 5, respondent_id: 1, response_content: "4"},
            {id: 2, question_id: 5, respondent_id: 2, response_content: "4"}
          ],
          averageRating: 4 }
      ],
      averageRating: 3.5
    }
  ];


  test("should render without throwing an error", () => {
    const themeDetails = create(<Themes themes={themes} />).toJSON();
    expect(themeDetails).toMatchSnapshot();
  });
});
