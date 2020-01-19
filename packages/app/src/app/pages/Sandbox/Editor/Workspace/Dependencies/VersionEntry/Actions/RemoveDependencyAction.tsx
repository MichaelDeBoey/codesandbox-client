import React, { ComponentProps, FunctionComponent, MouseEvent } from 'react';
import CrossIcon from 'react-icons/lib/md/clear';

import { useOvermind } from 'app/overmind';

import { Action } from './Action';

type Props = {
  dependencyName: string;
} & Required<Pick<ComponentProps<typeof Action>, 'singleton'>>;
export const RemoveDependencyAction: FunctionComponent<Props> = ({
  dependencyName,
  singleton,
}) => {
  const {
    actions: {
      editor: { npmDependencyRemoved },
    },
  } = useOvermind();

  const removeDependency = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    npmDependencyRemoved(dependencyName);
  };

  return (
    <Action
      Icon={CrossIcon}
      onClick={removeDependency}
      singleton={singleton}
      tooltip="Remove"
    />
  );
};
