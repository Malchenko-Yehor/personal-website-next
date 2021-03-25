import { render } from '@testing-library/react';
import React from 'react';
import H3 from './H3';


describe('<H3>', () => {
  test('renders text correctly', () => {
    const { getByText } = render(<H3 text="test" />);

    expect(getByText('test')).toBeInTheDocument();
  });
});