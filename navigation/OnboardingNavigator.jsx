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
                headerRight: () => <DarkModeButton/>,
            }}>
                <Stack.Screen name="1st" component={FirstScreen} options={{headerTitle: 'My Farm'}}/>
                <Stack.Screen name="2nd" component={SecondScreen} options={{headerTitle: 'My Crop'}}/>
                <Stack.Screen name="3rd" component={ThirdScreen} options={{headerTitle: 'My Fertilizer'}}/>
            </Stack.Navigator>
        </>
    );
}