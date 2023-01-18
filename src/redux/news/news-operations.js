import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews, fetchNewsByFilter } from 'API/news';

export const fetchArticles = createAsyncThunk(
  'news/fetchall',
  async (_, { rejectWithValue }) => {
    try {
      const result = await fetchNews();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchArticlesByFilter = createAsyncThunk(
  'news/fetchFiltered',
  async (filter, { rejectWithValue }) => {
    try {
      const result = await fetchNewsByFilter(filter);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
