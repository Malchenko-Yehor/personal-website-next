import React, { FC, useMemo } from 'react';
import { v4 as uuid } from 'uuid';

const AnimatedHexagon: FC = () => {
  const hoverAreaId: string = useMemo(() => 'a' + uuid().replaceAll('-', ''), []);

  return (
    <svg viewBox="0 0 183 210.7">
      <path
        id={hoverAreaId}
        d="M2,58.2v94.3c0,2.8,1.5,5.4,3.9,6.8l81.7,47.1c2.4,1.4,5.4,1.4,7.8,0l81.7-47.1c2.4-1.4,3.9-4,3.9-6.8V58.2
        c0-2.8-1.5-5.4-3.9-6.8L95.4,4.3c-2.4-1.4-5.4-1.4-7.8,0L5.9,51.4C3.5,52.8,2,55.4,2,58.2z"
        stroke="transparent"
        strokeWidth="4"
        fill="transparent"
        style={{ transformOrigin: 'center' }}
      />
      <path
        d="M2,58.2v94.3c0,2.8,1.5,5.4,3.9,6.8l81.7,47.1c2.4,1.4,5.4,1.4,7.8,0l81.7-47.1c2.4-1.4,3.9-4,3.9-6.8V58.2
        c0-2.8-1.5-5.4-3.9-6.8L95.4,4.3c-2.4-1.4-5.4-1.4-7.8,0L5.9,51.4C3.5,52.8,2,55.4,2,58.2z"
        stroke="#707070"
        strokeWidth="4"
        fill="#F9EEF2"
        style={{ transformOrigin: 'center', pointerEvents: 'none' }}
      >
        <animate
          dur="0.3"
          begin={`${hoverAreaId}.mouseover`}
          fill="freeze"
          attributeName="d"
          to="M2,105.1v0.4c0,31.8,17,61.3,44.6,77.2l0.4,0.2c27.6,15.9,61.6,15.9,89.1,0l0.4-0.2
          c27.6-15.9,44.6-45.4,44.6-77.2v-0.4c0-31.8-17-61.3-44.6-77.2l-0.4-0.2c-27.6-15.9-61.6-15.9-89.1,0l-0.4,0.2
          C19,43.9,2,73.3,2,105.1z"
        />
        <animateTransform
          dur="0.3"
          begin={`${hoverAreaId}.mouseover`}
          fill="freeze"
          attributeName="transform"
          attributeType="XML"
          type="scale"
          from="1"
          to="0.9"
        />
        <animate
          dur="0.3"
          begin={`${hoverAreaId}.mouseout`}
          fill="freeze"
          attributeName="d"
          to="M2,58.2v94.3c0,2.8,1.5,5.4,3.9,6.8l81.7,47.1c2.4,1.4,5.4,1.4,7.8,0l81.7-47.1c2.4-1.4,3.9-4,3.9-6.8V58.2
          c0-2.8-1.5-5.4-3.9-6.8L95.4,4.3c-2.4-1.4-5.4-1.4-7.8,0L5.9,51.4C3.5,52.8,2,55.4,2,58.2z"
        />
        <animateTransform
          dur="0.3"
          begin={`${hoverAreaId}.mouseout`}
          fill="freeze"
          attributeName="transform"
          attributeType="XML"
          type="scale"
          to="1"
        />
      </path>
    </svg>
  );
};

export default AnimatedHexagon;
