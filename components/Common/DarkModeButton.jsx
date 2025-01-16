import {Fab, FabIcon, MoonIcon} from "@/components/ui";
import React from "react";
import {toggleDarkMode} from "@/redux/slices/darkModeSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectDarkMode} from "@/redux/selectors/darkModeSelectors";

const DarkModeToggle = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(selectDarkMode);

    const handleToggle = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <div>
            <p>현재 모드: {isDarkMode ? '다크 모드' : '라이트 모드'}</p>
            <button onClick={handleToggle}>다크 모드 토글</button>
        </div>
    );
};

export default function DarkModeButton(props) {
    return (
        <Fab
            size="lg"
            placement="bottom right"
            className="absolute bottom-12 right-12"
        >
            <FabIcon as={MoonIcon} size="xl"/>
        </Fab>
    );
}
