import React from 'react';
import { create } from 'react-test-renderer';
import Spinner from '../../Components/Spinner';

describe("Spinner", () => {
  test("should render without throwing an error", () => {
    const loadingSpinner = create(<Spinner spinnerText="Test" />).toJSON();
    expect(loadingSpinner).toMatchSnapshot();
  });
});
