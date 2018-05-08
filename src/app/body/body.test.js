import React from 'react';
import renderer from 'react-test-renderer';
import Body from './body';

test('matches snapshot', () => {
  const tree = renderer.create(<Body />).toJSON();
  expect(tree).toMatchSnapshot();
});
