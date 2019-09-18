import React from 'react';
import { object } from '@storybook/addon-knobs';

import { sandbox } from '../SandboxCard/fixtures';

import CustomTemplate from './';

const template = (props = null) => ({
  id: '2321',
  color: '#fff',
  sandbox: sandbox(props),
});

export default {
  title: 'components/CustomTemplate',
};

export const Default = () => (
  <CustomTemplate template={object('template', template())} />
);

export const NoTitle = () => (
  <CustomTemplate template={object('template', template({ title: null }))} />
);
NoTitle.story = { name: 'No Title' };

export const NoDescription = () => (
  <CustomTemplate
    template={object('template', template({ description: null }))}
  />
);
NoDescription.story = { name: 'No Description' };

export const NoTags = () => (
  <CustomTemplate template={object('template', template({ tags: [] }))} />
);
NoTags.story = { name: 'No Tags' };
