import React from 'react';
import { text } from '@storybook/addon-knobs';

import ContributorsBadge from '.';

export default {
  title: 'components/ContributorsBadge',
};

export const Default = () => (
  <ContributorsBadge username={text('name', 'SaraVieira')} />
);
