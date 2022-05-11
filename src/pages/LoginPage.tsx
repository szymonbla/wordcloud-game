import { UserLayout } from 'layouts/UserLayout';
import { Login } from 'features/login';

export const LoginPage = () => {
  return (
    <UserLayout>
      <Login />
    </UserLayout>
  );
};
