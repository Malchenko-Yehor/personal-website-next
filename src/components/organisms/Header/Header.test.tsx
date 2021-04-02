import { render } from '@testing-library/react';
import { ImageProps } from 'next/image';
import React from 'react';
import Header from './index';

const imageProps: ImageProps = {
  src: 'test',
  width: 100,
  height: 100
};

describe('<Header>', () => {
  test('renders image conditionally', () => {
    const { container, rerender } = render(<Header title="test" image={imageProps} />);

    let imageEl = container.querySelector('img');

    expect(imageEl).toBeInTheDocument();

    rerender(<Header title="test" />);

    imageEl = container.querySelector('img');

    expect(imageEl).not.toBeInTheDocument();
  });

  test('renders intro conditionally', () => {
    const { container, rerender } = render(<Header title="test" intro="intro" />);

    let introEl = container.querySelector('p');

    expect(introEl).toBeInTheDocument();

    rerender(<Header title="test" />);

    introEl = container.querySelector('p');

    expect(introEl).not.toBeInTheDocument();
  });
});