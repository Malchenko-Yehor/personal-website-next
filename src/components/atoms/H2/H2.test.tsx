import { render } from '@testing-library/react';
import React from 'react';
import H2 from './H2';


describe('<H2>', () => {
  test('renders text correctly', () => {
    const { getByText } = render(<H2 text="test" />);

    expect(getByText('test')).toBeInTheDocument();
  });
});