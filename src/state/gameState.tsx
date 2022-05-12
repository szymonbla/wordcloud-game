import { createContext, ReactNode, useState, useContext } from 'react';

interface GameData {
  result: number;
  isSubmitted: boolean;
}

interface GameFunctions {
  updateGameData: (updatedGameData: GameData) => void;
}

interface GameProviderProps {
  children: ReactNode;
}
type UserContextShape = GameData & GameFunctions;

export const GameContext = createContext<UserContextShape | undefined>(undefined);

export const GameProvider = ({ children }: GameProviderProps) => {
  const [gameData, setGameData] = useState<GameData>({ isSubmitted: false, result: 0 });

  function updateGameData(updatedGameData: GameData) {
    setGameData(updatedGameData);
  }

  const gameCtxValue: UserContextShape = {
    ...gameData,
    updateGameData
  };

  return <GameContext.Provider value={gameCtxValue}>{children}</GameContext.Provider>;
};

export function useGame() {
  const gameCtx = useContext(GameContext);

  if (gameCtx === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return gameCtx;
}
