import { createSlice } from '@reduxjs/toolkit';
import { fetchArticles, fetchArticlesByFilter } from './news-operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: {
    [fetchArticles.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchArticles.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchArticles.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [fetchArticlesByFilter.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchArticlesByFilter.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchArticlesByFilter.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

const persistConfig = {
  key: 'news',
  storage,
  whitelist: ['items'],
};

const newsReducer = persistReducer(persistConfig, newsSlice.reducer);

export default newsReducer;
