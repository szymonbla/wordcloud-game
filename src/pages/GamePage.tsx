import { UserLayout } from 'layouts/UserLayout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesDefinition } from 'routing/constants/RoutesDefinition';
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
      <h2>test</h2>
    </UserLayout>
  );
};
