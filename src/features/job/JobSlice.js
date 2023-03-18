import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getJobs, addJob } from "./JobAPI"

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: ''
}
//fetch jobs only
export const fetchJobs = createAsyncThunk('job/fetchJobs', async () => {
  const jobs = await getJobs();
  return jobs
})
//Add job
export const createJob = createAsyncThunk('job/createJob', async (data) => {
  const job = await addJob(data);
  return job
})

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
  }
})

export default jobsSlice.reducer