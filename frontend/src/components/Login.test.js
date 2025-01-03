import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ token: 'fake-token' })
  })
);

describe('Login Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Login onLogin={() => {}} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
