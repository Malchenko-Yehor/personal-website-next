import { CSSProperties, FC } from 'react';
import { linkTo } from '@storybook/addon-links';
import styled from 'styled-components';
import { cWhite, fontRubik } from '@styles/variables';

interface UsedComponentsListInterface {
  usedComponents: string[];
}

const UsedComponentsList: FC<UsedComponentsListInterface> = ({ usedComponents }) => {
  return (
    <Container>
      <span>Used components inside</span>

      <ul>
        {usedComponents.map((componentName) => (
          <li key={componentName}>
            <button onClick={linkTo(componentName)}>{componentName}</button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 0;

  & * {
    font-family: ${fontRubik};
    color: ${cWhite};
  }

  & button {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default UsedComponentsList;
