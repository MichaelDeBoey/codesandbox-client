import React from 'react';

import AutosizeInput from '.';

export default {
  title: 'components/Input',
};

export const Basic = () => <AutosizeInput value="I am a fancy input" />;
Basic.story = { name: 'Basic AutosizeInput' };
