import { SubmitHandler } from 'react-hook-form';

import { UserLayout } from 'layouts/UserLayout';
import { Login } from 'features/login';
import { LoginFormData } from 'features/login/types';

export const LoginPage = () => {
  const handleSubmit: SubmitHandler<LoginFormData> = (requestData) => {
    console.log(requestData);
  };

  return (
    <UserLayout>
      <Login onSubmit={handleSubmit} />
    </UserLayout>
  );
};
