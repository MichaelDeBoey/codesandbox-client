import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import { Button } from '.';

export default {
  title: 'components/Button',
};

export const Basic = () => (
  <Button onClick={action('onClick')}>{text('Value', 'Text')}</Button>
);
Basic.story = { name: 'Basic button with text' };

export const Small = () => (
  <Button small={boolean('small', true)} onClick={action('onClick')}>
    {text('Value', 'Text')}
  </Button>
);
Small.story = { name: 'Button small' };

export const Block = () => (
  <Button block={boolean('block', true)} onClick={action('onClick')}>
    {text('Value', 'Text')}
  </Button>
);
Block.story = { name: 'Button block' };

export const Disabled = () => (
  <Button disabled={boolean('disabled', true)} onClick={action('onClick')}>
    {text('Value', 'Text')}
  </Button>
);
Disabled.story = { name: 'Button disabled' };

export const Red = () => (
  <Button red={boolean('red', true)} onClick={action('onClick')}>
    {text('Value', 'Text')}
  </Button>
);
Red.story = { name: 'Button red' };

export const Secondary = () => (
  <Button secondary={boolean('secondary', true)} onClick={action('onClick')}>
    {text('Value', 'Text')}
  </Button>
);
Secondary.story = { name: 'Button secondary' };

export const Danger = () => (
  <Button danger={boolean('danger', true)} onClick={action('onClick')}>
    {text('Value', 'Text')}
  </Button>
);
Danger.story = { name: 'Button danger' };
