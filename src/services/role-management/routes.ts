
import MainContainer from '../../modules/main/main.container';
import MarketsContainer from '../../modules/markets/markets.container';
import { UserRole } from './roles';

export type Route = {
  component: (props?: any) => JSX.Element;
  name: string;
  url: string;
  sidebar: boolean;
  userRoles: UserRole[];
}

const routes: Route[] = [{
    // Main
    component: MainContainer,
    name: 'Main',
    url: '/',
    sidebar: false,
    userRoles: [UserRole.ADMIN],
  }, {
    // Markets
    component: MarketsContainer,
    name: 'Markets',
    url: '/markets/:name',
    sidebar: false,
    userRoles: [UserRole.ADMIN],
  }, 
]

export function getRoutes(): Route[] {
  
    let filteredRoutes = routes.filter((route) => route.userRoles.includes(UserRole.ADMIN));
  
    return filteredRoutes;
  }
  