import { Grid } from '@mui/material';
import { InputField, ButtonComponent } from 'common/components';

export const Login = () => {
  return (
    <Grid>
      <InputField label="Nickname" name="nickname" type="text" />
      <ButtonComponent label="Play" />
    </Grid>
  );
};
