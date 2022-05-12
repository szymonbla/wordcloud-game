import { RouteProps } from 'react-router-dom';

import { GamePage } from 'pages/GamePage';
import { ResultsPage } from 'pages/ResultsPage';
import { RoutesDefinition } from './RoutesDefinition';

export const userRoutes: RouteProps[] = [
  { path: RoutesDefinition.game, element: <GamePage /> },
  { path: RoutesDefinition.result, element: <ResultsPage /> }
];
