import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import SwitchComponent from './';

export default {
  title: 'components/Switch',
};

export const Switch = () => (
  <SwitchComponent onClick={action('Clikkkk')} right={false} />
);

export const SwitchRight = () => (
  <SwitchComponent onClick={action('Clikkkk')} right={boolean('right', true)} />
);
SwitchRight.story = { name: 'Switch Right' };

export const SwitchSecondary = () => (
  <SwitchComponent
    right={false}
    onClick={action('Clikkkk')}
    secondary={boolean('secondary', true)}
  />
);
SwitchSecondary.story = { name: 'Switch secondary' };

export const SwitchOffMode = () => (
  <SwitchComponent
    right={false}
    onClick={action('Clikkkk')}
    offMode={boolean('offMode', true)}
  />
);
SwitchOffMode.story = { name: 'Switch offMode' };

export const SwitchSmall = () => (
  <SwitchComponent
    right={false}
    onClick={action('Clikkkk')}
    small={boolean('small', true)}
  />
);
SwitchSmall.story = { name: 'Switch small' };
