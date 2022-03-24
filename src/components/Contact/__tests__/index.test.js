import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact Component', () => {
  it('renders', () => {
    render(<Contact></Contact>)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact></Contact>);
    //assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Contact Me Text visible', () => {
  it('is visible', () => {
    const { getByTestId } = render(<Contact></Contact>);

    expect(getByTestId('h1Tag')).toHaveTextContent('Contact me');
  });
})

describe('Submit visible', () => {
  it('is visible', () => {
    const { getByTestId } = render(<Contact></Contact>);

    expect(getByTestId('buttonTag')).toHaveTextContent('Submit');
  });
})

