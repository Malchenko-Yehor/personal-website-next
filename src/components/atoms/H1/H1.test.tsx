import { render } from '@testing-library/react';
import React from 'react';
import H1 from './H1';


describe('<H1>', () => {
  test('renders text correctly', () => {
    const { getByText } = render(<H1 text="test" />);

    expect(getByText('test')).toBeInTheDocument();
  });
});