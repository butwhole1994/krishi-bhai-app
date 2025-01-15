import "@/global.css";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from './navigation';


{/* 앱 최상위 파일 */}
export default function App() {
    return (
        <GluestackUIProvider mode="light">
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </GluestackUIProvider>
    );
}
