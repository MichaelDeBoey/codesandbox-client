import React, { ComponentProps, ComponentType, FunctionComponent } from 'react';

import { Icon as IconBase } from '../../../elements';

import { Tooltip } from './elements';

type TooltipProps = ComponentProps<typeof Tooltip>;
type Props = {
  Icon: ComponentType;
  tooltip: TooltipProps['content'];
} & Required<Pick<ComponentProps<typeof IconBase>, 'onClick'>> &
  Required<Pick<TooltipProps, 'singleton'>>;
export const Action: FunctionComponent<Props> = ({
  Icon,
  onClick,
  singleton,
  tooltip,
}) => (
  <Tooltip content={tooltip} singleton={singleton}>
    <IconBase onClick={onClick}>
      <Icon />
    </IconBase>
  </Tooltip>
);
