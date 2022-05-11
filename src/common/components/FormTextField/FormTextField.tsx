import { TextField, TextFieldProps, FormHelperText } from '@mui/material';
import { useController } from 'react-hook-form';

interface FormTextFieldProps extends Omit<TextFieldProps, 'onChange' | 'inputRef' | 'value' | 'error'> {
  name: string;
  defaultValue?: string;
}

export const FormTextField = ({ name, defaultValue, ...rest }: FormTextFieldProps) => {
  const {
    field: { ref, value, ...fieldProps },
    fieldState: { error }
  } = useController({
    name,
    defaultValue
  });

  return (
    <TextField
      {...rest}
      {...fieldProps}
      value={value}
      inputRef={ref}
      name={name}
      error={!!error}
      helperText={error?.message}
      sx={{ width: '100%', '& .MuiOutlinedInput-input': { typography: 'subtitle1' } }}
    />
  );
};
