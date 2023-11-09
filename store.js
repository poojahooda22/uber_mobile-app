import { configureStore } from '@reduxjs/toolkit';
import navReducer
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

export default store;