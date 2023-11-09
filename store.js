import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices'


const store = configureStore({
  reducer: rootReducer,
})

export default store;