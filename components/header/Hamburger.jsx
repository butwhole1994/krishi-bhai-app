import React from 'react';
import {
    Box,
    Button,
    Center,
    CloseIcon,
    Drawer,
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    Heading,
    Icon,
    PhoneIcon,
    StarIcon
} from "@/components/ui";
import {MenuIcon} from "@/components/ui/icon";
import {BugIcon, HouseIcon, SproutIcon} from "lucide-react-native";
import {useNavigation} from "@react-navigation/native";

export default function Hamburger() {
    const [showDrawer, setShowDrawer] = React.useState(false)
    const navigation = useNavigation(); // navigation 객체 가져오기

    /* 햄버거 닫기버튼 */
    const closeHamburger = () => {
        setShowDrawer(false)
    }

    /* 스크린 이동 버튼 */
    const moveScreen = (screenName) => {
        closeHamburger();
        navigation.navigate(screenName);
    }

    return (
        <>
            <Center className="p-5" onTouchEnd={() => {
                setShowDrawer(true)
            }}>
                <Icon as={MenuIcon} size="xl"/>
            </Center>
            <Drawer
                isOpen={showDrawer}
                onClose={closeHamburger}
                size="lg"
                anchor="right"
            >
                <DrawerBackdrop/>
                <DrawerContent>
                    <DrawerHeader className="mt-2">
                        <Heading size="xl">Krishi Bhai</Heading>
                        <Button size="xl" variant="link" action="primary" onTouchEnd={closeHamburger}>
                            <Icon as={CloseIcon} size="xl"/>
                        </Button>
                    </DrawerHeader>
                    <DrawerBody contentContainerClassName="gap-2">
                        <Box className={classNames.BodyBox}
                             onTouchEnd={() => moveScreen('Fertilizer')}
                        >
                            <Icon as={SproutIcon} size="xl" className="text-typography-600"/>
                            <Heading size="md">Fertilizer</Heading>
                        </Box>
                        <Box className={classNames.BodyBox}
                             onTouchEnd={() => moveScreen('Pesticide')}
                        >
                            <Icon as={BugIcon} size="xl" className="text-typography-600"/>
                            <Heading size="md">Pesticide</Heading>
                        </Box>
                        <Box className={classNames.BodyBox}
                             onTouchEnd={() => moveScreen('MyPage')}
                        >
                            <Icon as={HouseIcon} size="xl" className="text-typography-600"/>
                            <Heading size="md">My Page</Heading>
                        </Box>
                        <Box className={classNames.BodyBox}
                             onTouchEnd={() => moveScreen('Tips')}
                        >
                            <Icon as={StarIcon} size="xl" className="text-typography-600"/>
                            <Heading size="md">Tips</Heading>
                        </Box>
                    </DrawerBody>
                    <DrawerFooter>
                        <Box className={classNames.FooterBox}>
                            <Icon as={PhoneIcon} size="xl" className="text-typography-600"/>
                            <Heading size="md">Contact Us</Heading>
                        </Box>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>

    );
}

const classNames = {
    BodyBox: "gap-3 flex-row items-center bg-background-50 p-2 rounded-md",
    FooterBox: "w-full gap-3 flex-row items-center bg-background-50 p-2 rounded-md",
};