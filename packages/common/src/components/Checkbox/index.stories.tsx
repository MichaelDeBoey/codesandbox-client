/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from '.';

export default {
  title: 'components/Checkbox',
};

export const Basic = () => (
  <>
    <Checkbox
      onClick={action('onClick')}
      onChange={action('onChange')}
      id="hello"
    />

    <label htmlFor="checkbox">Hello</label>
  </>
);
Basic.story = { name: 'Basic Checkbox' };

export const Checked = () => (
  <>
    <Checkbox
      onClick={action('onClick')}
      onChange={action('onChange')}
      id="hello"
      checked
    />

    <label htmlFor="checkbox">Hello</label>
  </>
);
Checked.story = { name: 'Checked Checkbox' };
