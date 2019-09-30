import React from 'react';
import { create } from 'react-test-renderer';
import BreadCrumb from '../../Components/BreadCrumb';

describe("BreadCrumb", () => {
  test("should render without throwing an error", () => {
    const breadCrumb = create(<BreadCrumb pageName="test" />).toJSON();
    expect(breadCrumb).toMatchSnapshot();
  });
});
