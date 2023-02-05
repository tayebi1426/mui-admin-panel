import {lazy} from "react";
import NotFound from 'views/sessions/NotFound';
import sessionRoutes from 'views/sessions/SessionRoutes';

import DashboardRoutes from '../views/dashboard/DashboardRoutes'

const Hello = () => {
    return <span>Hello</span>
}
const DefaultLayout =lazy(()=>import ('../components/layouts'))
const routes = [

    {path: '/hello', element: <Hello/>},
    {path: '/404', element: <NotFound/>},
    ...sessionRoutes,
    {
        path: "/",
        element: <DefaultLayout/>,
        children:[...DashboardRoutes]
    }

]

export default routes;
