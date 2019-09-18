import React from 'react';
import { text } from '@storybook/addon-knobs';

import TooltipComponent from './';

export default {
  title: 'components/Tooltip',
};

export const Tooltip = () => (
  <TooltipComponent content={text('Content', 'one')}>Hover me</TooltipComponent>
);
