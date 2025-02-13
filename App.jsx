import "@/global.css";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import MainNavigator from './navigation/navigation';
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";
import {selectDarkMode} from "@/redux/selectors/darkModeSelectors";
import {initializeDatabase} from "@/database/Database";
import React, {useEffect, useState} from "react";
import {selectAppInfo} from "@/database/repositories/AppInfoRepository";
import OnboardingNavigator from "@/navigation/OnboardingNavigator";
import LoadingScreen from "@/screens/common/LoadingScreen";

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
    const [isFirstLaunch, setIsFirstLaunch] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        /* 앱 초기화 */
        const initApp = async () => {
            try {
                //1. DB 초기화
                await initializeDatabase();
                //2. 앱 최초실행 확인 -> 온보딩 노출 분기
                const resultSet = await selectAppInfo();
                if (resultSet[0].IS_FIRST_LAUNCH !== 0) setIsFirstLaunch(true);
            } catch (error) {
                console.error("앱 초기화 오류:", error);
            } finally {
                //3. 모든 작업 완료 후 로딩 상태 해제
                if (isMounted) setIsLoading(false);
            }
        };

        initApp();

        return () => {
            isMounted = false;
        };
    }, []);

    if (isLoading) {
        return <LoadingScreen/>
    }

    return (
        <GluestackUIProvider mode={isDarkMode ? 'dark' : 'light'}>
            <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
                {isFirstLaunch ? <OnboardingNavigator/> : <MainNavigator/>}
            </NavigationContainer>
        </GluestackUIProvider>
    );
}
