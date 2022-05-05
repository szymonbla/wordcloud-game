import { RouteProps } from 'react-router-dom';

import { LoginPage } from 'pages/LoginPage';
import { RoutesDefinition } from './RoutesDefinition';

export const guestRoutes: RouteProps[] = [{ path: RoutesDefinition.login, element: <LoginPage /> }];
