import { createSlice } from '@reduxjs/toolkit';

const post = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    loading: false,
    error: null,
    next: true,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = [...state.data, action.payload];
      state.error = null;
      state.next = action.payload.length >= 5 ? true : false;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
    fetchStop(state) {
      state.loading = false;
      state.next = false;
    },
  },
});

export const { fetchStarted, fetchSuccess, fetchError, fetchStop } =
  post.actions;

export const getPosts = page => async dispatch => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
    );
    const data = await response.json();
    if (data.length) dispatch(fetchSuccess(data));
    else dispatch(fetchStop());
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export default post.reducer;
