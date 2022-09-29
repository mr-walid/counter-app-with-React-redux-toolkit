import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './reducers/CounterReduxer'

export default configureStore({
  reducer: {
       counter : CounterReducer,
  } //add reducers here
})