import { Grid, Typography } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';

import { LoginFormData } from 'features/login/types';
import { LoginForm } from './LoginForm';
interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormData>;
  isProcessing?: boolean;
}

export const Login = ({ onSubmit, isProcessing }: LoginFormProps) => {
  return (
    <Grid display="flex" flexDirection="column" sx={{ '& > div': { mb: 4 } }}>
      <Typography variant="h2" fontWeight="600" sx={{ textAlign: 'center', mb: 4 }}>
        WordCloud Game
      </Typography>
      <LoginForm onSubmit={onSubmit} isProcessing={isProcessing} />
    </Grid>
  );
};
