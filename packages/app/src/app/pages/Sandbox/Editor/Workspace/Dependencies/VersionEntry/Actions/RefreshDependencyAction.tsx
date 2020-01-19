import React, { ComponentProps, FunctionComponent, MouseEvent } from 'react';
import RefreshIcon from 'react-icons/lib/md/refresh';

import { useOvermind } from 'app/overmind';

import { Action } from './Action';

type Props = {
  dependencyName: string;
} & Required<Pick<ComponentProps<typeof Action>, 'singleton'>>;
export const RefreshDependencyAction: FunctionComponent<Props> = ({
  dependencyName,
  singleton,
}) => {
  const {
    actions: {
      editor: { addNpmDependency },
    },
  } = useOvermind();

  const refreshDependency = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    addNpmDependency({ name: dependencyName });
  };

  return (
    <Action
      Icon={RefreshIcon}
      onClick={refreshDependency}
      singleton={singleton}
      tooltip="Update to latest"
    />
  );
};
