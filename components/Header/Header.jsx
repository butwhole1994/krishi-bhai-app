import React from 'react';
import {Box, Center, Heading, HStack, Icon} from "@/components/ui";
import {ChevronLeftIcon, MenuIcon} from "@/components/ui/icon";


export default function Header() {

    return (
        <Box className="bg-success-300 h-24 flex-col-reverse">
            <HStack className="w-full justify-between">
                {/* BACK */}
                <Center className="p-5">
                    <Icon as={ChevronLeftIcon} size="xl"/>
                </Center>

                {/* LOGO */}
                <Center className="p-5" w="200px">
                    <Heading className="text-typography-white">
                        Krishi Bhai
                    </Heading>
                </Center>

                {/* HAMBURGER */}
                <Center className="p-5">
                    <Icon as={MenuIcon} size="xl"/>
                </Center>
            </HStack>
        </Box>

    );
}