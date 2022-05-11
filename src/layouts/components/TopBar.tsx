import { Box, Grid, Link, Typography } from '@mui/material';

import { RoutesDefinition } from 'routing/constants/RoutesDefinition';
import Logo from 'common/images/logo.png';
import { useUser } from 'state';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const TopBar = () => {
  const { nickname } = useUser();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'absolute',
        top: 0,
        backgroundColor: 'grey.400',
        width: '100%',
        borderBottom: '1px solid',
        borderColor: 'grey.600',
        py: 2
      }}
    >
      <Link
        href={RoutesDefinition.login}
        title="WordCloud logo"
        aria-label="Logo"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none',
          position: 'relative'
        }}
      >
        <Grid
          component="img"
          sx={{
            width: '60px',
            height: '100%',
            '&:hover': {
              cursor: 'hover'
            }
          }}
          src={Logo}
          alt="WordCloud logo"
        />
        <Typography variant="h4" fontWeight="600" sx={{ letterSpacing: '1px', color: 'grey.800' }}>
          WordCloud
        </Typography>
      </Link>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: '10%'
        }}
      >
        {nickname && (
          <>
            <AccountCircleIcon sx={{ width: '2em', height: '2em' }} />
            <Typography variant="subtitle1" fontWeight="600">
              {nickname}
            </Typography>
          </>
        )}
      </Box>
    </Grid>
  );
};
