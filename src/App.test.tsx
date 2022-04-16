import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('renders something', () => {
  render(<App />);
  const e = screen.getByText(/bits and pieces/i);
  expect(e).toBeInTheDocument();
});
it('returns relevant clues when passed a one-word string', () => {
  render(<App />);
  const input = screen.getByLabelText('search-box');
  // On initial render, there should be no search results
  expect(screen.queryAllByRole('listitem').length).toBe(0);

  fireEvent.change(input, {target: {value: 'A'}});

  const sampleResult = screen.getByText(/ace/i);
  expect(sampleResult).toBeInTheDocument();

  const allResults = screen.queryAllByRole('listitem');
  /** * @todo Replace magic number with calculation based on data source */
  expect(allResults.length).toBe(5);
});
it('should be case insensitive', () => {
  render(<App />);
  const input = screen.getByLabelText('search-box');

  fireEvent.change(input, {target: {value: 'a'}});

  const sampleResult = screen.getByText(/ace/i);
  expect(sampleResult).toBeInTheDocument();

  const allResults = screen.queryAllByRole('listitem');
  /** * @todo Replace magic number with calculation based on data source */
  expect(allResults.length).toBe(5);
});
it('returns relevant clues when passed a longer string', () => {
  render(<App />);
  const input = screen.getByLabelText('search-box');

  fireEvent.change(input, {target: {value: 'TA'}});

  const sampleResult = screen.getByText(/thanks/i);
  expect(sampleResult).toBeInTheDocument();

  const allResults = screen.queryAllByRole('listitem');
  /** * @todo Replace magic number with calculation based on data source */
  expect(allResults.length).toBe(5);
});
