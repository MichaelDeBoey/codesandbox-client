import { SingletonTooltip } from '@codesandbox/common/lib/components/Tooltip';
import React, { ComponentProps, FunctionComponent } from 'react';

import { IconArea } from '../../../elements';

import { RefreshDependencyAction } from './RefreshDependencyAction';
import { RemoveDependencyAction } from './RemoveDependencyAction';
import { ShowBundleSizesAction } from './ShowBundleSizesAction';

type Props = Pick<
  ComponentProps<typeof RefreshDependencyAction>,
  'dependencyName'
> &
  Pick<
    ComponentProps<typeof ShowBundleSizesAction>,
    'setShowBundleSizes' | 'showBundleSizes'
  >;
export const Actions: FunctionComponent<Props> = ({
  dependencyName,
  setShowBundleSizes,
  showBundleSizes,
}) => (
  <IconArea>
    <SingletonTooltip>
      {singleton => (
        <>
          <ShowBundleSizesAction
            setShowBundleSizes={setShowBundleSizes}
            showBundleSizes={showBundleSizes}
            singleton={singleton}
          />

          <RefreshDependencyAction
            dependencyName={dependencyName}
            singleton={singleton}
          />

          <RemoveDependencyAction
            dependencyName={dependencyName}
            singleton={singleton}
          />
        </>
      )}
    </SingletonTooltip>
  </IconArea>
);
