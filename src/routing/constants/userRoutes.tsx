import { RouteProps } from 'react-router-dom';

import { GamePage } from 'pages/GamePage';
import { RoutesDefinition } from './RoutesDefinition';

export const userRoutes: RouteProps[] = [{ path: RoutesDefinition.game, element: <GamePage /> }];
