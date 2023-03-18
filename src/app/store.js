import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../../src/features/job/JobSlice'
import filterReducer from '../../src/features/filterSlice'

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    filter: filterReducer
  },
});
