import { Button, ButtonProps } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

const DisabledButton = styled(Button)({
  color: '#757575!important',
  backgroundColor: '#F6F6F6!important',
});

export default function MButton(props: ButtonProps) {
  return <>{props.disabled ? <DisabledButton {...props} /> : <Button {...props} />}</>;
}
