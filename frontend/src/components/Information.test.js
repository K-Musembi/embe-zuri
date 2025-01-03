import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Information from './Result';

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: 'mocked data' }),
  })
);

describe('Information Component', () => {
  const mockResult = {
    name: "Healthy",
    causes: ["Main causes"],
    description: ["Main description"],
    remedies: ["Use antifungal spray", "Ensure proper ventilation"],
  };

  it('renders correctly with result', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Information result={mockResult} onPrediction={jest.fn()} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
