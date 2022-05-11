import { Grid, Typography } from '@mui/material';

import { ButtonComponent, FormTextField } from 'common/components';

export const Login = () => {
  return (
    <Grid display="flex" flexDirection="column" sx={{ '& > div': { mb: 4 } }}>
      <Typography variant="h2" fontWeight="600" sx={{ textAlign: 'center', mb: 4 }}>
        WordCloud Game
      </Typography>
      <FormTextField label="Nickname" name="nickname" type="text" placeholder="Enter your nickname here..." />
      <Grid display="flex" justifyContent="center" alignItems="center">
        <ButtonComponent label="Play" sx={{ width: '30%' }} />
      </Grid>
    </Grid>
  );
};
