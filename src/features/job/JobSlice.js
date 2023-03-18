import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getJobs, addJob, deleteJob, editJob } from "./JobAPI"

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: '',
  editItem: {}
}
//fetch jobs only
export const fetchJobs = createAsyncThunk('job/fetchJobs', async () => {
  const jobs = await getJobs();
  return jobs
})
//Add job
export const createJob = createAsyncThunk('job/createJob', async (data) => {
  const job = await addJob(data);
  console.log('from create job', data)
  return job
})
//delete job
export const removeJob = createAsyncThunk('job/removeJob', async (id) => {
  const job = await deleteJob(id);
  return job
})
export const changeJob = createAsyncThunk('job/changeJob', async ({ id, data }) => {
  const job = await editJob(id, data);
  return job
})

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editItem = action.payload;
    },
    editInActive: (state) => {
      state.editItem = {}
    }
  },
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
      .addCase(removeJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = state.jobs.filter(job => job.id !== action.meta.arg)
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(changeJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(changeJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        const indexToUpdate = state.jobs.findIndex(t => t.id === action.payload.id);
        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(changeJob.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
  }
})

export default jobsSlice.reducer
export const { editActive, editInActive } = jobsSlice.actions