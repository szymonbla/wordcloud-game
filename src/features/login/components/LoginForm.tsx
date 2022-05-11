import { Grid } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ButtonComponent, FormTextField } from 'common/components';
import { LoginFormData, loginFormSchema } from 'features/login/types';

interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormData>;
  isProcessing?: boolean;
}

export const LoginForm = ({ onSubmit, isProcessing }: LoginFormProps) => {
  const formMethods = useForm<LoginFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      nickname: ''
    }
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <FormTextField label="Nickname" name="nickname" placeholder="Enter your nickname here..." type="text" />
        <Grid display="flex" justifyContent="center" alignItems="center">
          <ButtonComponent label="Play" isProcessing={isProcessing} sx={{ width: '40%', mt: 4 }} />
        </Grid>
      </form>
    </FormProvider>
  );
};
