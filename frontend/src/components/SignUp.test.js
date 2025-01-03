import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import SignUp from './SignUp';

// Mock fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Success' })
  })
);
global.alert = jest.fn();

describe('SignUp Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <SignUp onSignUp={() => {}} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
