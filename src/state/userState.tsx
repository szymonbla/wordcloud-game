import { createContext, ReactNode, useContext } from 'react';

import { USER_STORAGE_KEY } from 'common/constants';
import { useLocalStorageState } from 'common/hooks';

interface UserProfile {
  nickname: string;
}

interface UserFunctions {
  updateUserState: (updatedUser: UserProfile) => void;
}

type UserContextShape = UserProfile & UserFunctions;

const UserContext = createContext<UserContextShape | undefined>(undefined);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [localState, setLocalState] = useLocalStorageState(USER_STORAGE_KEY, {});

  function updateUserState(updatedUser: UserProfile) {
    setLocalState({ ...localState, ...updatedUser });
  }

  const userContextValue: UserContextShape = {
    nickname: localState?.nickname ?? '',
    updateUserState
  };

  return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};

export function useUser() {
  const userCtx = useContext(UserContext);

  if (userCtx === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return userCtx;
}
