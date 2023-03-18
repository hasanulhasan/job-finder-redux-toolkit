import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../../src/features/job/JobSlice'

export const store = configureStore({
  reducer: {
    jobs: jobsReducer
  },
});
