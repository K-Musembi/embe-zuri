import React from 'react';
import renderer from 'react-test-renderer';
import ImageUpload from './ImageUpload';
import { MemoryRouter } from 'react-router-dom';

describe('ImageUpload component snapshot test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
        <MemoryRouter>
          <ImageUpload />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ message: 'Success' })
    })
  );
