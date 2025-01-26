import "@/global.css";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import MainNavigator from './navigation';
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";
import {selectDarkMode} from "@/redux/selectors/darkModeSelectors";
import { initializeDatabase } from "@/database/Database";

export default function App() {


    return (
        <Provider store={store}>
            <AppContent/>
        </Provider>
    );
}

export function AppContent() {
    const isDarkMode = useSelector(selectDarkMode);

    return (
        <GluestackUIProvider mode={isDarkMode ? 'dark' : 'light'}>
            <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
                <MainNavigator/>
            </NavigationContainer>
        </GluestackUIProvider>
    );
}
