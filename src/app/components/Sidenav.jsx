import {styled, Box} from '@mui/system';
import {MatxVerticalNav} from 'app/components';
import useSettings from 'hooks/useSettings';
import {navigations} from 'config/navigations';
import {Fragment} from 'react';

const SideNavMobile = styled('div')(({theme}) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.54)',
    zIndex: -1,
    [theme.breakpoints.up('lg')]: {display: 'none'},
}));

const Sidenav = ({children}) => {
    const {settings, updateSettings} = useSettings();

    const updateSidebarMode = (sidebarSettings) => {
        let activeLayoutSettingsName = settings.activeLayout + 'Settings';
        let activeLayoutSettings = settings[activeLayoutSettingsName];

        updateSettings({
            ...settings,
            [activeLayoutSettingsName]: {
                ...activeLayoutSettings,
                leftSidebar: {
                    ...activeLayoutSettings.leftSidebar,
                    ...sidebarSettings,
                },
            },
        });
    };

    return (
        <Fragment>
            <Box sx={{paddingLeft: '1rem', paddingRight: '1rem', position: 'relative'}}>
                {children}
                <MatxVerticalNav items={navigations}/>
            </Box>

            <SideNavMobile onClick={() => updateSidebarMode({mode: 'close'})}/>
        </Fragment>
    );
};

export default Sidenav;
