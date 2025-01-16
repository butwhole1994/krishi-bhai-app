import {Fab, FabIcon, MoonIcon} from "@/components/ui";
import React from "react";
import {toggleDarkMode} from "@/redux/slices/darkModeSlice";
import {useDispatch} from "react-redux";


export default function DarkModeButton(props) {
    const dispatch = useDispatch();
    const darkModeHandler = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <Fab
            size="lg"
            placement="bottom right"
            className="absolute bottom-12 right-12"
        >
            <FabIcon onTouchEnd={darkModeHandler} as={MoonIcon} size="xl"/>
        </Fab>
    );
}
