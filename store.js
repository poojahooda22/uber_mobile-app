import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice'


export const store = configureStore({
  reducer: rootReducer,
})

export default store;