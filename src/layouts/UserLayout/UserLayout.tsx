import { ReactNode } from 'react';

import { Grid } from '@mui/material';

import { TopBar } from 'layouts/components';
interface UserLayoutProps {
  children: ReactNode;
}

export const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100vw', height: '100vh', position: 'relative' }}
    >
      <TopBar />
      {children}
    </Grid>
  );
};
