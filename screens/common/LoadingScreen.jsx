import React from 'react';
import {Center, HStack, Spinner, Text} from '@/components/ui';
import colors from "tailwindcss/colors"

export default function LoadingScreen() {
    return (
        <Center className="h-full">
            <HStack space="sm">
                <Spinner size="large" color={colors.emerald[600]}/>
                <Center>
                    <Text className="font-bold" size="lg">Please Wait</Text>
                </Center>
            </HStack>
        </Center>
    );
}