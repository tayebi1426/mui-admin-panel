import React from 'react';
import { MatxSuspense } from 'app/components';
import useSettings from 'hooks/useSettings';

const ApplicationLayouts = { layout1: React.lazy(() => import('./Layout1/Layout1')) };


const Layout = (props) => {
    const { settings } = useSettings();
    const Layout = ApplicationLayouts[settings.activeLayout];

    return (
        <MatxSuspense>
            <Layout {...props} />
        </MatxSuspense>
    );
};

export default Layout;


