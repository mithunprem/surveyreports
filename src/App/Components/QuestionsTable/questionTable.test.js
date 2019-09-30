import React from 'react';
import { create } from 'react-test-renderer';
import QuestionsTable from '../../Components/QuestionsTable';

describe("QuestionsTable", () => {

  const questions = [
    {description: "Test question 1", averageRating: 3.6},
    {description: "Test question 2", averageRating: 4.6}
  ];

  test("should render without throwing an error", () => {
    const questionsTable = create(<QuestionsTable questions={questions}/>).toJSON();
    expect(questionsTable).toMatchSnapshot();
  });

  test("should render the average rating with appropriate color coding", () => {
    const questionsTable = create(<QuestionsTable questions={questions}/>);
    // First question has a rating of 3.6 and hence this td should have
    // a text-yellow class associated with it.
    const className = questionsTable.root.findAllByType('td')[1].props.className;
    expect(className).toBe('average-rating-value text-yellow');
  });

});
