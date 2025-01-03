import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

test('Home component snapshot test', () => {
    const tree = renderer.create(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
