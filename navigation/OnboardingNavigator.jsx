import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DarkModeButton from "@/components/Common/DarkModeButton";
import FirstScreen from "@/screens/onBoarding/FirstScreen";
import SecondScreen from "@/screens/onBoarding/SecondScreen";
import ThirdScreen from "@/screens/onBoarding/ThirdScreen";

const Stack = createStackNavigator();

export default function OnboardingNavigator() {
    return (
        <>
            <Stack.Navigator id="MainStack" screenOptions={{
                headerTitleAlign: "center",
                headerTitle: 'Welcome!',
                headerRight: () => <DarkModeButton/>,
            }}>
                <Stack.Screen name="1st" component={FirstScreen} />
                <Stack.Screen name="2nd" component={SecondScreen}/>
                <Stack.Screen name="3rd" component={ThirdScreen}/>
            </Stack.Navigator>
        </>
    );
}