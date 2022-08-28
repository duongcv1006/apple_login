import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const InputPassword: React.FC<{
  label?: string;
  name: string;
  control: any;
  rules?: any;
  error?: any;
  helperText?: any;
  placeholder?:string;
}> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      defaultValue=""
      render={({ field }) => (
        <TextField
          sx={{
            width: '100%',
          }}
          label={props.label}
          error={!!props.error}
          helperText={props.error ? props.helperText : ''}
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          placeholder={props.placeholder}
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...field}
        />
      )}
    />
  );
};

export default InputPassword;
