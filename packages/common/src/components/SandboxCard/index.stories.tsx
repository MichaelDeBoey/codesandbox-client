import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select, number, array, boolean } from '@storybook/addon-knobs';

import SandboxCard, { Props, Sandbox } from '.';
import * as fixtures from './fixtures';

const authorWithKnobs = (
  group: string,
  author: Sandbox['author'] = null
): Sandbox['author'] => {
  const knobs = {
    username: text('author.username', author && author.username, group),
    avatar_url: text('author.avatar_url', author && author.avatar_url, group),
  };

  if (knobs.username !== null || knobs.avatar_url !== null) {
    return knobs;
  }

  return author;
};

const sandboxWithKnobs = (group: string, sandbox: Sandbox): Sandbox => ({
  id: text('id', sandbox.id, group),
  title: text('title', sandbox.title, group),
  author: authorWithKnobs(group, sandbox.author),
  description: text('description', sandbox.description, group),
  screenshot_url: text('screenshot_url', sandbox.screenshot_url, group),
  view_count: number('view_count', sandbox.view_count, {}, group),
  fork_count: number('fork_count', sandbox.fork_count, {}, group),
  like_count: number('like_count', sandbox.like_count, {}, group),
  template: select(
    'template',
    fixtures.templateOptions,
    sandbox.template,
    group
  ),
  tags: array('tags', sandbox.tags, ',', group),
});

const createSandboxStory = ({
  sandbox = fixtures.sandbox(),
  selectSandbox = action('selectSandbox'),
  small,
  noHeight,
  defaultHeight,
  noMargin,
}: Partial<Props>) => () => (
  <SandboxCard
    sandbox={sandboxWithKnobs('sandbox', sandbox)}
    selectSandbox={selectSandbox}
    small={boolean('small', small)}
    noHeight={boolean('noHeight', noHeight)}
    defaultHeight={number('defaultHeight', defaultHeight)}
    noMargin={boolean('noMargin', noMargin)}
  />
);

export default {
  title: 'components/SandboxCard',
};

export const Basic = createSandboxStory({});

export const Small = createSandboxStory({ small: true });

export const NoHeight = createSandboxStory({ noHeight: true });
NoHeight.story = { name: 'no height' };

export const DefaultHeight = createSandboxStory({ defaultHeight: 500 });
DefaultHeight.story = { name: 'default height' };

export const NoMargin = createSandboxStory({ noMargin: true });
NoMargin.story = { name: 'no margin' };

export const Popular = createSandboxStory({
  sandbox: fixtures.popularSandbox(),
});
Popular.story = { name: 'popular' };

export const ManyTags = createSandboxStory({
  sandbox: fixtures.sandboxWithManyTags(),
});
ManyTags.story = { name: 'many tags' };

export const LongTitle = createSandboxStory({
  sandbox: fixtures.sandboxWithLongTitle(),
});
LongTitle.story = { name: 'long title' };

export const LongDescription = createSandboxStory({
  sandbox: fixtures.sandboxWithLongDescription(),
});
LongDescription.story = { name: 'long description' };

export const NullAuthor = createSandboxStory({
  sandbox: fixtures.sandboxWithNullAuthor(),
});
NullAuthor.story = { name: 'null author' };

export const UndefinedAuthor = createSandboxStory({
  sandbox: fixtures.sandboxWithUndefinedAuthor(),
});
UndefinedAuthor.story = { name: 'undefined author' };

export const NullScreenshotUrl = createSandboxStory({
  sandbox: fixtures.sandboxWithNullScreenshotUrl(),
});
NullScreenshotUrl.story = { name: 'null screenshot url' };

export const UndefinedScreenshotUrl = createSandboxStory({
  sandbox: fixtures.sandboxWithUndefinedScreenshotUrl(),
});
UndefinedScreenshotUrl.story = { name: 'undefined screenshot url' };
