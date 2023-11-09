import { configureStore } from '@reduxjs/toolkit';
import navReducer from ''
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

export default store;