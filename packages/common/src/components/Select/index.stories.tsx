import React from 'react';

import SelectComponent from './';

export default {
  title: 'components/Select',
};

export const Select = () => (
  <SelectComponent>
    <option>one</option>
    <option>two</option>
    <option>three</option>
    <option>four</option>
    <option>five</option>
    <option>six</option>
  </SelectComponent>
);

export const SelectWithError = () => (
  <SelectComponent error>
    <option>one</option>
    <option>two</option>
    <option>three</option>
    <option>four</option>
    <option>five</option>
    <option>six</option>
  </SelectComponent>
);
SelectWithError.story = { name: 'Select error' };
