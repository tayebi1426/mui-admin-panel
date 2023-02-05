import Loadable from 'app/components/Loadable';
import {lazy} from 'react';
import {authRoles} from '../../app/auth/authRoles';
import {Navigate} from "react-router-dom";

const Analytics = Loadable(lazy(() => import('./Analytics')));

const dashboardRoutes = [
    {path: '/dashboard', element: <Analytics/>, auth: authRoles.admin},
    {path: '/', element: <Navigate to="/dashboard"/>}
];

export default dashboardRoutes;
