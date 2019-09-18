import React from 'react';

import GithubBadge from '.';

export default {
  title: 'components/GithubBadge',
};

export const Master = () => (
  <GithubBadge
    username="CompuIves"
    repo="codesandbox-client"
    branch="master"
  />
);

export const OtherBranch = () => (
  <GithubBadge
    username="CompuIves"
    repo="codesandbox-client"
    branch="storybook"
  />
);
OtherBranch.story = { name: 'Other Branch' };
