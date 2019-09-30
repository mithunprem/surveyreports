import React from 'react';
import { create } from 'react-test-renderer';
import Header from '../../Components/Header';
import SurveyList from '../../Pages/SurveyList';

describe("Header", () => {
  test("should render without throwing an error", () => {
    const header = create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
  });

  test("should render with a child component without throwing an error", () => {
    const header = create(<Header><SurveyList /></Header>).toJSON();
    expect(header).toMatchSnapshot();
  });
});
