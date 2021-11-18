import { fireEvent, render } from '@testing-library/react';
import BurgerButton from './index';


describe('<BurgerButton>', () => {

  test('calls onClick function on button click', () => {
    const onClickMock = jest.fn();
    const { container } = render(<BurgerButton onClick={onClickMock} />);
    const buttonEl = container.querySelector('button');

    fireEvent.click(buttonEl);

    expect(onClickMock).toBeCalled();
  });
});
