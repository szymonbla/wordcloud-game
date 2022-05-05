import { Grid } from '@mui/material';
import { InputField } from 'common/components';

export const Login = () => {
  return (
    <Grid>
      <InputField label="Nickname" name="nickname" type="text" />
    </Grid>
  );
};
