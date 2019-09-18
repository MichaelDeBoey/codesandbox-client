import React from 'react';

import Input from '.';

export default {
  title: 'components/Input',
};

export const Basic = () => <Input value="I am a fancy input" />;
Basic.story = { name: 'Basic Input' };

export const Error = () => <Input value="I am a fancy input" error />;
Error.story = { name: 'Error Input' };

export const Placeholder = () => <Input placeholder="Hello" />;
Placeholder.story = { name: 'Placeholder Input' };
