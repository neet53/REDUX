import { configureStore } from '@reduxjs/toolkit'
import ReducerA from './SliceA'
import ReducerB from './SliceB'

export const Store = configureStore({
  reducer:{
    SliceAReducer : ReducerA,
    SliceBReducer : ReducerB,
  },
});
