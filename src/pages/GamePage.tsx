import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { RoutesDefinition } from 'routing/constants/RoutesDefinition';
import { UserLayout } from 'layouts/UserLayout';
import { Game } from 'features';
import { useUser } from 'state';

export const GamePage = () => {
  const { nickname } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!nickname) {
      navigate(RoutesDefinition.login);
    }
  }, [navigate, nickname]);

  return (
    <UserLayout>
      <Game />
    </UserLayout>
  );
};
