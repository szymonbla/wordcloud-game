import { ReactNode } from 'react';
import { GameProvider } from './gameState';
import { UserContextProvider } from './userState';

interface StateWrapperProps {
  children: ReactNode;
}

export const StateWrapper = ({ children }: StateWrapperProps) => (
  <UserContextProvider>
    <GameProvider>{children}</GameProvider>
  </UserContextProvider>
);
