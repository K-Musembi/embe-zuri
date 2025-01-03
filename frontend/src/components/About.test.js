import React from 'react';
import renderer from 'react-test-renderer';
import Team from './About';

test('About component snapshot test', () => {
  const tree = renderer.create(<Team />).toJSON();
  expect(tree).toMatchSnapshot();
});
