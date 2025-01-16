import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "@/screens/HomeScreen";
import FertilizerScreen from "@/screens/fertilizer/FertilizerScreen";
import PesticideScreen from "@/screens/pesticide/PesticideScreen";
import MyPageScreen from "@/screens/myCrop/MyPageScreen";
import TipsScreen from "@/screens/tips/TipsScreen";
import Hamburger from "@/components/Header/Hamburger";
import DarkModeButton from "@/components/Common/DarkModeButton";

const Stack = createStackNavigator();

export default function MainNavigator() {
    return (
        <>
            <Stack.Navigator id="MainStack" screenOptions={{
                headerTitleAlign: "center",
                headerRight: () => <Hamburger/>,
            }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: 'Krishi Bhai'}}/>
                <Stack.Screen name="Fertilizer" component={FertilizerScreen}/>
                <Stack.Screen name="Pesticide" component={PesticideScreen}/>
                <Stack.Screen name="MyPage" component={MyPageScreen}/>
                <Stack.Screen name="Tips" component={TipsScreen}/>
            </Stack.Navigator>
            <DarkModeButton />
        </>
    );
}