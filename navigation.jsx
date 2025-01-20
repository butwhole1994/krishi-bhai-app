import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "@/screens/HomeScreen";
import FertilizerScreen from "@/screens/fertilizer/FertilizerScreen";
import PesticideScreen from "@/screens/pesticide/PesticideScreen";
import MyFarmScreen from "@/screens/myFarm/MyFarmScreen";
import TipsScreen from "@/screens/tips/TipsScreen";
import DarkModeButton from "@/components/Common/DarkModeButton";
import DockBar from "@/components/Footer/DockBar";

const Stack = createStackNavigator();

export default function MainNavigator() {
    return (
        <>
            <Stack.Navigator id="MainStack" screenOptions={{
                headerTitleAlign: "center",
                headerRight: () => <DarkModeButton/>,
            }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: 'Krishi Bhai'}}/>
                <Stack.Screen name="Fertilizer" component={FertilizerScreen}/>
                <Stack.Screen name="Pesticide" component={PesticideScreen}/>
                <Stack.Screen name="MyFarm" component={MyFarmScreen}/>
                <Stack.Screen name="Tips" component={TipsScreen}/>
            </Stack.Navigator>
            <DockBar/>
        </>
    );
}