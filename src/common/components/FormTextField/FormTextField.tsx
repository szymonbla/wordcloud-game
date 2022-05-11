import { TextField } from '@mui/material';

interface FormTextFieldProps {
  name: string;
  label: string;
  type: string;
  isError?: boolean;
  placeholder?: string;
}

export const FormTextField = ({ name, label, type, isError, placeholder }: FormTextFieldProps) => {
  return <TextField name={name} label={label} placeholder={placeholder} error={isError} type={type} />;
};
