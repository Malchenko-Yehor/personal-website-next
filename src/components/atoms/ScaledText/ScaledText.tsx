import { useOnMediaQueryChange } from '@hooks/index';
import { devices } from '@styles/variables';
import { FC, useLayoutEffect, useRef, useState } from 'react';
import * as S from './ScaledText.styled';

export interface ScaledTextProps {
  applySize?: boolean;
}

const ScaledText: FC<ScaledTextProps> = ({ children, applySize }) => {
  const textRef = useRef<SVGTextElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [computedFontSize, setComputedFontSize] = useState<string>('');
  const allDevicesWidth = Object.values(devices).map((device) => device.width);

  const setFontSize = () => {
    const fontSize = window.getComputedStyle(textRef.current).fontSize;

    setComputedFontSize(fontSize);
  };

  useOnMediaQueryChange(allDevicesWidth, setFontSize);

  useLayoutEffect(() => {
    const { width: textWidth, height: textHeight } = textRef.current.getBBox();

    svgRef.current.setAttribute('viewBox', `0 0 ${textWidth + 0.04 * textWidth} ${textHeight}`);

    if (applySize) {
      svgRef.current.style.width = `${textWidth + 0.02 * textWidth}px`;
      svgRef.current.style.height = `${textHeight}px`;
    }
  }, [children, computedFontSize]);

  return (
    <S.ScaledText ref={svgRef}>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" ref={textRef}>
        {children}
      </text>
    </S.ScaledText>
  );
};

export default ScaledText;
