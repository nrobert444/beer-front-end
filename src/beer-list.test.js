import React from 'react';
import List from './beer-list.js';
import renderer from 'react-test-renderer';

it('list renders correctly', () => {
  const tree = renderer
    .create(<List />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});