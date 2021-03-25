import { render } from '@testing-library/react';
import React from 'react';
import Paragraph from './Paragraph';


describe('<Paragraph>', () => {
  test('renders text correctly', () => {
    const { getByText } = render(<Paragraph text="test" />);

    expect(getByText('test')).toBeInTheDocument();
  });
});