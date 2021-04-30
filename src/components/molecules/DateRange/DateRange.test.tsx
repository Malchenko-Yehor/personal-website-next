import React from 'react';
import DateRange from './index';
import { render } from '@testing-library/react';

describe('<DateRange>', () => {
  test('renders date range correctly', () => {
    const startDate = new Date('11/11/2011');
    const endDate = new Date('12/12/2012');

    const { getByText } = render(<DateRange startDate={startDate} endDate={endDate} />);

    expect(getByText('Nov 2011 - Dec 2012')).toBeInTheDocument();
  });
});


