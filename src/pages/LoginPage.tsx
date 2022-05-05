import { Typography } from '@mui/material';

import { UserLayout } from 'layouts/UserLayout';
import { Login } from 'features/login';
export const LoginPage = () => {
  return (
    <UserLayout>
      <Typography variant="h2" fontWeight="400">
        Test
      </Typography>
      <Login />
    </UserLayout>
  );
};
