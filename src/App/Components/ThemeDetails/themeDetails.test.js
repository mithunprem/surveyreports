import React from 'react';
import { create } from 'react-test-renderer';
import ThemeDetails from '../../Components/ThemeDetails';

describe("ThemeDetails", () => {

  const theme = {
    name: 'The Work',
    questions: [
      { description: 'Test question 1',
        survey_responses: [
          {id: 1, question_id: 4, respondent_id: 1, response_content: "4"},
          {id: 2, question_id: 4, respondent_id: 2, response_content: "4"}
        ],
        averageRating: 5 }
    ],
    averageRating: 4.5
  };


  test("should render without throwing an error", () => {
    const themeDetails = create(<ThemeDetails theme={theme} />).toJSON();
    expect(themeDetails).toMatchSnapshot();
  });

  test("should render the theme card with appropriate color coding", () => {
    const themeDetails = create(<ThemeDetails theme={theme} />).toJSON();
    const className = themeDetails.children[0].props.className;
    // The theme has a rating of 4.5 and hence this it should have
    // a margin-green class associated with it.
    expect(className).toBe('theme-details margin-green card card-body');
  });

});
