import React from 'react';

import AutosizeTextArea from '.';

export default {
  title: 'components/Input',
};

export const Basic = () => <AutosizeTextArea value="I am a fancy textarea" />;
Basic.story = { name: 'Basic AutosizeTextArea' };
