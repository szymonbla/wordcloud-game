import { Box, Grid, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useUser } from 'state';
import Logo from 'common/images/logo.png';
import { ButtonComponent } from 'common/components';
import { RoutesDefinition } from 'routing/constants/RoutesDefinition';

export const TopBar = () => {
  const { nickname, updateUserState } = useUser();

  const navigate = useNavigate();

  const handleLogout = () => {
    updateUserState({ nickname: '' });
    navigate(RoutesDefinition.login);
  };
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
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: '10%',
          '& > div': {
            mr: 2
          }
        }}
      >
        {nickname && (
          <>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <AccountCircleIcon sx={{ width: '2em', height: '2em' }} />
              <Typography variant="subtitle1" fontWeight="600">
                {nickname}
              </Typography>
            </Box>
            <ButtonComponent label="Logout" handleClick={handleLogout} sx={{ backgroundColor: 'warning.main' }} />
          </>
        )}
      </Box>
    </Grid>
  );
};
