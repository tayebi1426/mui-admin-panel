import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ForgotPassword = Loadable(lazy(() => import('./ForgotPassword')));
const JwtLogin = Loadable(lazy(() => import('./JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('./JwtRegister')));

const sessionRoutes = [
  { path: '/session/signUp', element: <JwtRegister /> },
  { path: '/session/signIn', element: <JwtLogin /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> }
];

export default sessionRoutes;
