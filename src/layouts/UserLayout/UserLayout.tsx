import { ReactNode } from 'react';

import { Grid, SxProps } from '@mui/material';

import { TopBar } from 'layouts/components';
interface UserLayoutProps {
  children: ReactNode;
  sx?: SxProps;
}

export const UserLayout = ({ children, sx }: UserLayoutProps) => {
  return (
    <Grid
      container
      flexDirection="column"
      sx={{ width: '100vw', height: '100vh', position: 'relative', overflowY: 'scroll', ...sx }}
    >
      <TopBar />
      <Grid
        sx={{
          height: 'calc(100% - 130px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};
