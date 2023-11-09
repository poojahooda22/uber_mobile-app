import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices'
import rootReducer from 

const store = configureStore({
  reducer: rootReducer,
})

export default store;