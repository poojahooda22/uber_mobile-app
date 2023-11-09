import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices'
import 

const store = configureStore({
  reducer: rootReducer,
})

export default store;