import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: null,
	dataLoadState: null,
	dataLoadError: null,
	isFetching: true,
	currentPage: 1,
	perPage: 10,
	totalCount: 0,
	repo: {},
}

export const reposSlice = createSlice({
	name: 'repos',
	initialState,
	reducers: {
		setRepos: (state, action) => {
			state.items = action.payload.items,
			state.isFetching = false,
			state.totalCount = action.payload.total_count
		},
		updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },
		setFetching: (state, action) => {
			state.isFetching = action.payload
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		},
		setRepo: (state, action) => {
			state.repo = action.payload
		},
	}
})

export const { setRepos, updateLoadState, setFetching, setCurrentPage, setRepo } = reposSlice.actions;

export default reposSlice.reducer;