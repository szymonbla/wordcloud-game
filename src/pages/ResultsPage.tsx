import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ButtonComponent } from 'common/components';
import { UserLayout } from 'layouts';
import { RoutesDefinition } from 'routing/constants/RoutesDefinition';
import { useGame, useUser } from 'state';

export const ResultsPage = () => {
  const { result, updateGameData } = useGame();
  const { nickname } = useUser();
  const navigate = useNavigate();

  const handleRestart = () => {
    updateGameData({ isSubmitted: false, result: 0 });
    navigate(RoutesDefinition.game);
  };
  return (
    <UserLayout>
      <Grid container flexDirection="column" justifyContent="center" alignItems="center" sx={{ '&>h3': { mb: 4 } }}>
        <Typography variant="h3" fontWeight="600">
          Congratulations, {nickname}!
        </Typography>
        <Typography variant="h3">Your score:</Typography>
        <Typography variant="h3" fontWeight="600" sx={{ color: 'info.main' }}>
          {result} points!
        </Typography>
        <ButtonComponent
          label="Restart game"
          handleClick={handleRestart}
          sx={{ width: '15%', backgroundColor: 'error.main' }}
        />
      </Grid>
    </UserLayout>
  );
};
