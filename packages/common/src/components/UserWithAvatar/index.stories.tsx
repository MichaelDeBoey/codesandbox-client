import React from 'react';
import { date, text, boolean } from '@storybook/addon-knobs';

import { UserWithAvatar } from './';

const defaults = () => ({
  username: text('Username', 'SaraVieira'),
  avatarUrl: text(
    'avatar url',
    'https://avatars0.githubusercontent.com/u/1051509?s=460&v=4'
  ),
});

export default {
  title: 'components/UserAvatar',
};

export const User = () => <UserWithAvatar {...defaults()} />;

export const UserWithName = () => (
  <UserWithAvatar {...defaults()} name={text('name', 'Sara Vieira')} />
);
UserWithName.story = { name: 'With Name' };

export const UserWithSubscription = () => (
  <UserWithAvatar
    {...defaults()}
    subscriptionSince={date('subscriptionSince', new Date())}
  />
);
UserWithSubscription.story = { name: 'With Subscription' };

export const UserWithHiddenBadge = () => (
  <UserWithAvatar {...defaults()} hideBadge={boolean('hideBadge', true)} />
);
UserWithHiddenBadge.story = { name: 'With hideBadge' };

export const UserWithBigName = () => (
  <UserWithAvatar {...defaults()} useBigName={boolean('useBigName', true)} />
);
UserWithBigName.story = { name: 'With useBigName' };
