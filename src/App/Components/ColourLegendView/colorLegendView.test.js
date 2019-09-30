import React from 'react';
import { create } from 'react-test-renderer';
import ColourLegendView from '../../Components/ColourLegendView';

describe("ColourLegendView", () => {
  test("should render without throwing an error", () => {
    const colorLegendView = create(<ColourLegendView />).toJSON();
    expect(colorLegendView).toMatchSnapshot();
  });
});
