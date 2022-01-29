import { FC } from 'react';
import * as S from './Crater.styled';

export interface CraterProps extends S.CraterProps {
  fill: string;
}

const Crater: FC<CraterProps> = ({ fill, size, topPosition, leftPosition, zIndex }) => {
  return (
    <>
      <S.Crater
        viewBox="0 0 100 100"
        size={size}
        topPosition={topPosition}
        leftPosition={leftPosition}
        zIndex={zIndex}
      >
        <path
          fill={fill}
          d="m75.69 7.1.77.48ZM50 0zM71.35 4.78l1 .47ZM81.64 11.29l.94.8c-.31-.27-.58-.54-.94-.8ZM79.73 9.8l.82.63ZM83.48 12.87c.38.34.74.69 1.11 1.05-.36-.35-.73-.71-1.11-1.05ZM77.75 8.41l.76.52ZM69.08 3.78l1.09.47ZM57.3.54ZM54.89.24l1.43.17ZM52.47.06l1.13.08ZM59.68.94l1.56.34ZM66.76 2.89l1.24.47ZM64.42 2.12ZM62.05 1.47l1.51.41ZM73.55 5.89l.84.46ZM98.63 38.4c.14.59.28 1.18.4 1.78-.12-.6-.26-1.18-.4-1.78ZM99.13 40.71c.11.62.22 1.24.32 1.86-.1-.57-.21-1.24-.32-1.86ZM87 16.38c.54.59 1.06 1.2 1.57 1.82-.5-.62-1.02-1.2-1.57-1.82ZM100 50.81v-.91.91ZM99.52 43.13c.08.62.17 1.24.23 1.86-.06-.63-.15-1.24-.23-1.86ZM97.36 34c.16.49.33 1 .48 1.46-.15-.53-.32-1.01-.48-1.46ZM86.54 15.89c-.42-.45-.83-.89-1.27-1.32.44.43.85.87 1.27 1.32ZM98 36.16c.16.54.32 1.09.45 1.63a9.64 9.64 0 0 0-.45-1.63ZM91.18 21.65l.31.44ZM89.75 19.68c.11.15.23.28.33.43-.08-.11-.22-.28-.33-.43ZM92.48 23.63l.33.52ZM94.73 27.67l.42.82ZM95.7 29.73c.16.34.31.68.46 1-.16-.32-.3-.66-.46-1ZM93.66 25.64l.37.65ZM96.58 31.82c.16.42.33.84.48 1.26-.16-.43-.32-.84-.48-1.26ZM99.93 47.39v.66c.01-.22.01-.44 0-.66ZM97.47 65.72ZM96.67 67.94c.16-.41.31-.82.46-1.23-.13.41-.3.82-.46 1.23ZM98.16 63.44c.13-.49.26-1 .38-1.46-.11.49-.25 1.02-.38 1.46ZM99.86 53.55c0-.39.06-.79.08-1.18-.02.39-.05.79-.08 1.18ZM98.75 61.1c.11-.5.22-1 .32-1.5-.07.5-.21 1-.32 1.5ZM95.78 70.11c.15-.35.31-.71.46-1.07-.15.36-.31.72-.46 1.07ZM99.23 58.68c.09-.49.17-1 .25-1.47-.08.49-.16.98-.25 1.47ZM99.61 56.17c0-.46.11-.91.16-1.37-.05.46-.11.91-.16 1.37ZM87.91 82.58c.27-.32.55-.63.81-1-.26.42-.54.68-.81 1ZM94.77 72.25c.16-.31.31-.62.46-.94-.14.32-.3.63-.46.94ZM86.07 84.61c.36-.37.72-.75 1.07-1.13-.35.38-.71.75-1.07 1.13ZM90.21 79.71l-.64.84ZM93.66 74.36l.46-.83ZM92.43 76.44l.48-.77c-.15.26-.32.51-.48.77ZM91.07 78.5l.54-.77ZM34.18 2.57ZM46.4.14l1.13-.08ZM73.49 26.51C46.15.58 15.36 14.24 14.81 14.48a50 50 0 1 0 70.71 70.71c.23-.54 14.6-33.42-12.03-58.68ZM36.44 1.88 38 1.47ZM38.76 1.28l1.56-.34ZM43.68.41l1.43-.17ZM41.16.8ZM29.83 4.25l1.09-.47ZM32 3.36l1.26-.47ZM17.42 12.09l.94-.81ZM15.4 13.92c.37-.35.74-.71 1.12-1.05-.38.34-.75.7-1.12 1.05ZM19.45 10.43l.82-.63ZM25.61 6.36l.84-.47c-.29.11-.56.31-.84.47ZM27.7 5.25l.95-.47ZM21.49 8.93l.76-.52ZM23.54 7.58l.77-.48Z"
        />
        <path
          opacity=".2"
          d="m75.69 7.1.77.48ZM50 0zM71.35 4.78l1 .47ZM81.64 11.29l.94.8c-.31-.27-.58-.54-.94-.8ZM79.73 9.8l.82.63ZM83.48 12.87c.38.34.74.69 1.11 1.05-.36-.35-.73-.71-1.11-1.05ZM77.75 8.41l.76.52ZM69.08 3.78l1.09.47ZM57.3.54ZM54.89.24l1.43.17ZM52.47.06l1.13.08ZM59.68.94l1.56.34ZM66.76 2.89l1.24.47ZM64.42 2.12ZM62.05 1.47l1.51.41ZM73.55 5.89l.84.46ZM98.63 38.4c.14.59.28 1.18.4 1.78-.12-.6-.26-1.18-.4-1.78ZM99.13 40.71c.11.62.22 1.24.32 1.86-.1-.57-.21-1.24-.32-1.86ZM87 16.38c.54.59 1.06 1.2 1.57 1.82-.5-.62-1.02-1.2-1.57-1.82ZM100 50.81v-.91.91ZM99.52 43.13c.08.62.17 1.24.23 1.86-.06-.63-.15-1.24-.23-1.86ZM97.36 34c.16.49.33 1 .48 1.46-.15-.53-.32-1.01-.48-1.46ZM86.54 15.89c-.42-.45-.83-.89-1.27-1.32.44.43.85.87 1.27 1.32ZM98 36.16c.16.54.32 1.09.45 1.63a9.64 9.64 0 0 0-.45-1.63ZM91.18 21.65l.31.44ZM89.75 19.68c.11.15.23.28.33.43-.08-.11-.22-.28-.33-.43ZM92.48 23.63l.33.52ZM94.73 27.67l.42.82ZM95.7 29.73c.16.34.31.68.46 1-.16-.32-.3-.66-.46-1ZM93.66 25.64l.37.65ZM96.58 31.82c.16.42.33.84.48 1.26-.16-.43-.32-.84-.48-1.26ZM99.93 47.39v.66c.01-.22.01-.44 0-.66ZM97.47 65.72ZM96.67 67.94c.16-.41.31-.82.46-1.23-.13.41-.3.82-.46 1.23ZM98.16 63.44c.13-.49.26-1 .38-1.46-.11.49-.25 1.02-.38 1.46ZM99.86 53.55c0-.39.06-.79.08-1.18-.02.39-.05.79-.08 1.18ZM98.75 61.1c.11-.5.22-1 .32-1.5-.07.5-.21 1-.32 1.5ZM95.78 70.11c.15-.35.31-.71.46-1.07-.15.36-.31.72-.46 1.07ZM99.23 58.68c.09-.49.17-1 .25-1.47-.08.49-.16.98-.25 1.47ZM99.61 56.17c0-.46.11-.91.16-1.37-.05.46-.11.91-.16 1.37ZM87.91 82.58c.27-.32.55-.63.81-1-.26.42-.54.68-.81 1ZM94.77 72.25c.16-.31.31-.62.46-.94-.14.32-.3.63-.46.94ZM86.07 84.61c.36-.37.72-.75 1.07-1.13-.35.38-.71.75-1.07 1.13ZM90.21 79.71l-.64.84ZM93.66 74.36l.46-.83ZM92.43 76.44l.48-.77c-.15.26-.32.51-.48.77ZM91.07 78.5l.54-.77ZM34.18 2.57ZM46.4.14l1.13-.08ZM73.49 26.51C46.15.58 15.36 14.24 14.81 14.48a50 50 0 1 0 70.71 70.71c.23-.54 14.6-33.42-12.03-58.68ZM36.44 1.88 38 1.47ZM38.76 1.28l1.56-.34ZM43.68.41l1.43-.17ZM41.16.8ZM29.83 4.25l1.09-.47ZM32 3.36l1.26-.47ZM17.42 12.09l.94-.81ZM15.4 13.92c.37-.35.74-.71 1.12-1.05-.38.34-.75.7-1.12 1.05ZM19.45 10.43l.82-.63ZM25.61 6.36l.84-.47c-.29.11-.56.31-.84.47ZM27.7 5.25l.95-.47ZM21.49 8.93l.76-.52ZM23.54 7.58l.77-.48Z"
        />
      </S.Crater>
      <S.CraterShadow
        viewBox="0 0 100 100"
        size={size}
        topPosition={topPosition}
        leftPosition={leftPosition}
        zIndex={zIndex}
      >
        <path
          d="M85.51 85.2A50 50 0 0 0 14.8 14.49S45.91.35 73.49 26.51C100.34 52 85.51 85.2 85.51 85.2Z"
          fill={fill}
        />
        <path
          d="M85.51 85.2A50 50 0 0 0 14.8 14.49S45.91.35 73.49 26.51C100.34 52 85.51 85.2 85.51 85.2Z"
          opacity="0.4"
        />
      </S.CraterShadow>
    </>
  );
};

export default Crater;
