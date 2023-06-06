import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sort: '',
  type: '',
  search: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    jobType: (state, action) => {
      state.type = action.payload;
    },
    searchParam: (state, action) => {
      state.search = action.payload;
    },
    sortType: (state, action) => {
      state.sort = action.payload
    }
  }
})

export default filterSlice.reducer;
export const { searchParam, jobType, sortType } = filterSlice.actions