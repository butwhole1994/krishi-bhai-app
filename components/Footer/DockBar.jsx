import {Box, Heading, HStack, Icon, StarIcon, Pressable} from "@/components/ui";
import React from "react";
import {BugIcon, HouseIcon, SproutIcon} from "lucide-react-native";
import {useNavigation} from "@react-navigation/native";

export default function DockBar() {

    const navigation = useNavigation(); // navigation 객체 가져오기

    /* 스크린 이동 버튼 */
    const moveScreen = (screenName) => {
        console.log('press');
        navigation.navigate(screenName);
    }

    return (
        <Box className="bg-secondary-0">
            <HStack className="justify-between p-2">
                <Pressable className={classNames.ButtonStyle}
                     onPress={() => moveScreen('Fertilizer')}
                >
                    <Icon as={SproutIcon} size="xl"/>
                    <Heading size="sm">Fertilizer</Heading>
                </Pressable>
                <Pressable className={classNames.ButtonStyle}
                     onPress={() => moveScreen('Pesticide')}
                >
                    <Icon as={BugIcon} size="xl"/>
                    <Heading size="sm">Pesticide</Heading>
                </Pressable>
                <Pressable className={classNames.ButtonStyle}
                     onPress={() => moveScreen('MyPage')}
                >
                    <Icon as={HouseIcon} size="xl"/>
                    <Heading size="sm">My Page</Heading>
                </Pressable>
                <Pressable className={classNames.ButtonStyle}
                     onPress={() => moveScreen('Tips')}
                >
                    <Icon as={StarIcon} size="xl"/>
                    <Heading size="sm">Tips</Heading>
                </Pressable>
            </HStack>
        </Box>
    );
}

const classNames = {
    ButtonStyle: "gap-3 flex-col items-center p-2 rounded-md",
    FooterBox: "w-full gap-3 flex-row items-center bg-background-50 p-2 rounded-md",
};