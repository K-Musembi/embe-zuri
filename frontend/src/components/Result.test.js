import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Result from './Result';

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: 'mocked data' }),
  })
);

describe('Result Component', () => {
  const mockResult = {
    prediction: "Healthy",
    confidence: 85,
    remedies: ["Use antifungal spray", "Ensure proper ventilation"],
  };

  it('renders correctly with result', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Result result={mockResult} onPrediction={jest.fn()} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
