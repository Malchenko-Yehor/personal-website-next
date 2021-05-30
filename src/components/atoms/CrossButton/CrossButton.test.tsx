import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CrossButton from './index';


describe('<CrossButton>', () => {
  test('calls onClick function on button click', () => {
    const onClickMock = jest.fn();
    const { container } = render(<CrossButton onClick={onClickMock} />);
    const buttonEl = container.querySelector('button');

    fireEvent.click(buttonEl);

    expect(onClickMock).toBeCalled();
  });
});
