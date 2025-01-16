import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        isDarkMode: false, // 기본값
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode; // 다크 모드 상태 토글
        },
        setDarkMode: (state, action) => {
            state.isDarkMode = action.payload; // 특정 상태로 설정
        },
    },
});

// 액션 생성자 내보내기
export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;

// 리듀서 내보내기
export default darkModeSlice.reducer;
