import React, {
  ComponentProps,
  Dispatch,
  FunctionComponent,
  SetStateAction,
} from 'react';
import ArrowDropDown from 'react-icons/lib/md/keyboard-arrow-down';
import ArrowDropUp from 'react-icons/lib/md/keyboard-arrow-up';

import { Action } from './Action';

type Props = {
  setShowBundleSizes: Dispatch<SetStateAction<boolean>>;
  showBundleSizes: boolean;
} & Required<Pick<ComponentProps<typeof Action>, 'singleton'>>;
export const ShowBundleSizesAction: FunctionComponent<Props> = ({
  setShowBundleSizes,
  showBundleSizes,
  singleton,
}) => (
  <Action
    Icon={showBundleSizes ? ArrowDropUp : ArrowDropDown}
    onClick={() => setShowBundleSizes(show => !show)}
    singleton={singleton}
    tooltip={showBundleSizes ? 'Hide sizes' : 'Show sizes'}
  />
);
