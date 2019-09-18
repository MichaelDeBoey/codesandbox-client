import React from 'react';
import { select, array } from '@storybook/addon-knobs';

import Tags from './';

export default {
  title: 'components/Tags',
};

export const One = () => <Tags tags={array('tags', ['one'])} />;
One.story = { name: 'One tag' };

export const Many = () => (
  <Tags tags={array('tags', ['one', 'two', 'three', 'four', 'five'])} />
);
Many.story = { name: 'Many tags' };

export const ManyWithAlign = () => (
  <Tags
    tags={array('tags', ['one', 'two', 'three', 'four', 'five'])}
    align={select('align', ['right', 'left'], 'right')}
  />
);
ManyWithAlign.story = { name: 'Many tags with align' };
