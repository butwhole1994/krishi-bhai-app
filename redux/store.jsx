import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

/**
 * Redux에서 전역상태관리를 하는 객체를 store라고 부른다
 * store.jsx에서 store를 생성한다
 */
const store = configureStore({
    reducer: rootReducer,
});

export default store;
