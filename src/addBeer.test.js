import React from 'react';
import addBeer from './addBeer.js';
import renderer from 'react-test-renderer';

it('addBeer renders correctly', () => {
  const tree = renderer
    .create(<addBeer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});