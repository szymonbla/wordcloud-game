import { ReactNode } from 'react';

import { Grid } from '@mui/material';

interface UserLayoutProps {
  children: ReactNode;
}

export const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <Grid container sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {children}
    </Grid>
  );
};
