import "@/global.css";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import MainNavigator from './navigation/navigation';
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";
import {selectDarkMode} from "@/redux/selectors/darkModeSelectors";
import {StatusBar} from 'react-native';
import OnboardingNavigator from "@/navigation/OnboardingNavigator";
import LoadingScreen from "@/screens/common/LoadingScreen";
import {useAppInit} from "@/composables/useAppInit";

/**
 * 앱 실행 메인 메서드
 */
export default function App() {
    return (
        <Provider store={store}>
            <AppContent/>
        </Provider>
    );
}

/**
 * 앱 컨텐츠 ROOT 레이아웃
 */
export function AppContent() {
    const isDarkMode = useSelector(selectDarkMode);
    const {isLoading, isFirstLaunch} = useAppInit();

    if (isLoading) {
        return <LoadingScreen/>
    }

    return (
        <GluestackUIProvider mode={isDarkMode ? 'dark' : 'light'}>
            <StatusBar
                hidden={false}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                translucent={true}
                backgroundColor="transparent"
            />
            <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
                {isFirstLaunch ? <OnboardingNavigator/> : <MainNavigator/>}
            </NavigationContainer>
        </GluestackUIProvider>
    );
}
