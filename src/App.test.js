import React from 'react';
import { render, screen } from '@testing-library/react';
import Apl from './Apl';

test('renders learn react link', () => {
  render(<Apl />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
