import React from 'react';
import { number } from '@storybook/addon-knobs';

import StatsComponent from './';

const defaults = () => ({
  viewCount: number('viewCount', 1223),
  likeCount: number('likeCount', 1223),
  forkCount: number('forkCount', 122123123),
});

export default {
  title: 'components/Stats',
};

export const Stats = () => <StatsComponent {...defaults()} />;

export const StatsWithText = () => <StatsComponent {...defaults()} text />;
StatsWithText.story = { name: 'Stats with text' };

export const VerticalStats = () => <StatsComponent {...defaults()} vertical />;
VerticalStats.story = { name: 'Vertical Stats' };

export const VerticalStatsWithText = () => (
  <StatsComponent {...defaults()} vertical text />
);
VerticalStatsWithText.story = { name: 'Vertical Stats with text' };
