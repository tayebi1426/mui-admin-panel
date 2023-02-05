import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {SettingsProvider} from './app/contexts/SettingsContext';
import routes from "./config/routes"
import DefaultTheme from "./components/theme/DefaultTheme";

const App = () => {
    const appRoutes = createBrowserRouter(routes)
    return (<SettingsProvider>
            <DefaultTheme>
                <RouterProvider router={appRoutes}/>)
            </DefaultTheme>
        </SettingsProvider>
    )
};

export default App;
