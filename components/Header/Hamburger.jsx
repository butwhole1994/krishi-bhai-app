import React from 'react';
import {Center, Icon} from "@/components/ui";
import {MenuIcon} from "@/components/ui/icon";

export default function Hamburger() {
    return (
        /* HAMBURGER */
        <Center className="p-5">
            <Icon as={MenuIcon} size="xl"/>
        </Center>
    );
}