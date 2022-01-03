import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import UsedComponentsList from './UsedComponentsList';
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

export default StorybookDocs;
