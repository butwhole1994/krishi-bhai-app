import "@/global.css";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from './navigation';
import Header from "@/components/Header/Header";

export default function App() {
    return (
        <GluestackUIProvider mode="light">
            <Header />
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </GluestackUIProvider>
    );
}
