import { useEffect } from 'react';

import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useUser } from 'state';
import { Login } from 'features/login';
import { UserLayout } from 'layouts/UserLayout';
import { LoginFormData } from 'features/login/types';
import { RoutesDefinition } from 'routing/constants/RoutesDefinition';

export const LoginPage = () => {
  const { updateUserState, nickname } = useUser();
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<LoginFormData> = (requestedData) => {
    if (requestedData) {
      updateUserState({ nickname: requestedData.nickname });
    }
    navigate(RoutesDefinition.game);
  };

  useEffect(() => {
    if (nickname) {
      navigate(RoutesDefinition.game);
    }
  }, [navigate, nickname]);

  return (
    <UserLayout>
      <Login onSubmit={handleSubmit} />
    </UserLayout>
  );
};
