import React from 'react';
import { create } from 'react-test-renderer';
import LoadingView from '../../Components/LoadingView';

describe("LoadingView", () => {
  test("should render a loading spinner without throwing an error", () => {
    const loadingView = create(<LoadingView isLoading={true} text={'test'}/>).toJSON();
    expect(loadingView).toMatchSnapshot();
  });

  test("should render an alert view without throwing an error", () => {
    const loadingView = create(<LoadingView isLoading={false} text={'test'}/>).toJSON();
    expect(loadingView).toMatchSnapshot();
  });
});
