import { fireEvent, render } from '@testing-library/react';
import CTA from './index';


describe('<CTA>', () => {
  test('renders button by default', () => {
    const { container } = render(<CTA label="test" />);
    const buttonEl = container.querySelector('button');

    expect(buttonEl).toBeTruthy();
  });

  test('calls onClick function on button click', () => {
    const onClickMock = jest.fn();
    const { container } = render(<CTA label="test" onClick={onClickMock} />);
    const buttonEl = container.querySelector('button');

    fireEvent.click(buttonEl);

    expect(onClickMock).toBeCalled();
  });

  test('renders anchor when href is provided to component', () => {
    const { container } = render(<CTA label="test" href="https://google.com" />);
    const anchorEl = container.querySelector('a');

    expect(anchorEl).toBeTruthy();
  });

  test('renders label correctly', () => {
    const label = 'test';
    const { getByText } = render(<CTA label={label} href="https://google.com" />);

    expect(getByText(label)).toBeInTheDocument();
  });
});
