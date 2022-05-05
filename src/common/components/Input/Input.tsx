import { Input, InputLabel, SxProps, FormControl } from '@mui/material';

interface InputFieldProps {
  label: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  sx?: SxProps;
}

export const InputField = ({ label, name, type, sx }: InputFieldProps) => {
  return (
    <FormControl
      sx={{
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'grey.800'
        },
        '& .MuiInputLabel-root.Mui-error': {
          color: 'error.main'
        },
        ...sx
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Input
        name={name}
        type={type}
        sx={{
          width: '100%',
          typography: 'h3',
          '&:after': {
            borderColor: 'grey.800'
          }
        }}
      />
    </FormControl>
  );
};
