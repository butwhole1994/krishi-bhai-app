import {createSlice} from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        isDarkMode: false, // 기본값
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode; // 다크 모드 상태 토글
        }
    },
});

// 액션 생성자 내보내기
export const {toggleDarkMode} = darkModeSlice.actions;

// 리듀서 내보내기
export default darkModeSlice.reducer;
