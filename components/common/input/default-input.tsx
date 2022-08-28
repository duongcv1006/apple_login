import { TextField } from '@mui/material';
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';

const DefaultInput: React.FC<{
  control: any;
  label?: string;
  name?: string;
  rows?: number;
  rules?: any;
  error?: any;
  helperText?: any;
  placeholder?: string;
}> = (props) => {
  const InputRender = useCallback(
    ({ field }: any) => {
      return (
        <TextField
          sx={{
            width: '100%',
          }}
          {...field}
          error={!!props.error}
          helperText={props.error ? props.helperText : ''}
          label={props.label}
          rows={props.rows ?? 1}
          multiline={props.rows && props.rows > 1}
          variant="outlined"
          placeholder={props.placeholder}
        />
      );
    },
    [props.error, props.helperText, props.label, props.placeholder, props.rows]
  );

  return (
    <>
      {props.control ? (
        <Controller
          name={props.name ?? ''}
          control={props.control}
          rules={props.rules}
          defaultValue=""
          render={InputRender}
        />
      ) : (
        InputRender({})
      )}
    </>
  );
};

export default React.memo(DefaultInput);
