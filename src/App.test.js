import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Ask Ron Swanson', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Ask Ron Swanson/i);
  expect(linkElement).toBeInTheDocument();
});
