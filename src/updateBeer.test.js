import React from 'react';
import UpdateBeer from './updateBeer.js';
import renderer from 'react-test-renderer';

it('UpdateBeer renders correctly', () => {
  const tree = renderer
    .create(<UpdateBeer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});