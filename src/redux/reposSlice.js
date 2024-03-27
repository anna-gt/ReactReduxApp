import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: null,
	dataLoadState: null,
	dataLoadError: null,
	isFetching: true,
}

export const reposSlice = createSlice({
	name: 'repos',
	initialState,
	reducers: {
		setRepos: (state, action) => {
			state.items = action.payload.items,
			state.isFetching = false
		},
		updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },
		setFetching: (state, action) => {
			state.isFetching = action.payload
		}
	}
})

export const { setRepos, updateLoadState, setFetching } = reposSlice.actions;

export default reposSlice.reducer;