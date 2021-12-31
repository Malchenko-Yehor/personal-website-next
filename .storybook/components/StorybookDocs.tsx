import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { linkTo } from '@storybook/addon-links';
import { FC } from 'react';

interface StorybookDocsInterface {
  usedComponents?: string[];
}

const StorybookDocs: FC<StorybookDocsInterface> = ({ usedComponents }) => {
  return (
    <>
      <Title />
      <Subtitle />

      {usedComponents && <UsedComponentsList usedComponents={usedComponents} />}

      <Description />
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
    </>
  );
};

interface UsedComponentsListInterface {
  usedComponents: string[];
}

const UsedComponentsList: FC<UsedComponentsListInterface> = ({ usedComponents }) => {
  return (
    <>
      <span>Used components inside</span>

      <ul>
        {usedComponents.map((componentName) => (
          <li key={componentName}>
            <button onClick={linkTo(componentName)}>componentName</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StorybookDocs;
