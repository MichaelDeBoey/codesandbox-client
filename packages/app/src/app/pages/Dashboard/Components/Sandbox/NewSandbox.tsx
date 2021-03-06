import React from 'react';
import { useActions } from 'app/overmind';
import { Stack, Text, Button, Icon } from '@codesandbox/components';
import css from '@styled-system/css';

interface NewSandboxProps {
  collectionId?: string;
}

export const NewSandbox: React.FC<NewSandboxProps> = props => {
  const { openCreateSandboxModal } = useActions();

  const onClick = () =>
    openCreateSandboxModal({ collectionId: props.collectionId });
  return (
    <Button
      variant="link"
      onClick={onClick}
      css={css({
        height: 240,
        fontSize: 3,
        backgroundColor: 'grays.700',
        border: '1px solid',
        borderColor: 'grays.600',
        borderRadius: 'medium',
        transition: 'all ease-in',
        transitionDuration: theme => theme.speeds[2],
        ':hover, :focus, :focus-within': {
          boxShadow: theme => '0 4px 16px 0 ' + theme.colors.grays[900],
        },
      })}
    >
      <Stack direction="vertical" align="center" gap={4}>
        <Icon name="plusInCircle" size={24} />
        <Text>New Sandbox</Text>
      </Stack>
    </Button>
  );
};
